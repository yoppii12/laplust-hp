---
slug: "eudlxpbw"
title: "LAplustインターンシップに参加して"
date: 2024-10-11
category: other
categories: [other]
sortIndex: 62
cover: "/assets/cms/NxqgdRVEa1/s-1280x720_v-fms_webp_62f7221d-271d-49fb-9ac8-4902e84e544b.png"
description: "佐世保高専 専攻科1年 村上匠私はLAplustのインターンシップ参加を通して、LAplustで行われている業務チーム開発の基礎技術実践的なAI開発について学ぶことができました。本稿では、私がインター... "
ogImage: "/assets/cms/NxqgdRVEa1/s-1280x720_v-fms_webp_62f7221d-271d-49fb-9ac8-4902e84e544b.png"
---

佐世保高専 専攻科1年 村上匠

私はLAplustのインターンシップ参加を通して、

-   LAplustで行われている業務
-   チーム開発の基礎技術
-   実践的なAI開発

について学ぶことができました。

本稿では、私がインターンシップの中で体験したこと、感じたことについてご報告します。

## 目次

**1\. 実習内容**  
　**実務体験**  
　**起業について**  
**2\. 学び**  
**3\. まとめ**  
**担当 LAplust 取締役 原崎より**

## **1\. 実習内容**

### 実務体験

インターンシップ参加に際して、LAplustは私が取り組む課題を私の技術レベルや興味関心を考慮した上で、いくつかの候補に絞り込んでくれました。  
相談の結果、**基幹プログラムに対する機能追加＆テスト実装**に取り組むことになりました。  
具体的には、  
ディレクトリ直下の全画像に対して物体検出処理を実行する(既存機能)  
という基幹プログラムに対し、以下の3点を課題として設定しました。  
(1)既存機能に対するテストコードの実装  
(2)動画が入力された場合、動画の各フレームに対して物体検出処理を実行する機能(追加機能)の追加実装  
(3)追加機能に対するテストコードの実装

![](/assets/cms/NxqgdRVEa1/s-1024x551_v-fs_webp_0536104c-5376-4ce7-bc64-fe8051a8227f.png)

機能概略図

課題は(1)→(2)→(3)の順番で取り組みました。  
理由は、まず既存機能のプログラムをよく理解することで新機能の追加を効率的に進めるという意図があったためです。

しかし、課題を進めていく中で以下に示すように多くの問題に直面しました。  
具体的には、

-   プログラムの規模が大きく、全容把握に時間がかかった
-   既存機能のプログラムから修正すべき箇所、流用できる箇所を特定する必要があった
-   テストコードを書いた経験がなく、手探りの状態であった
-   テストコードを実行する為のデモデータを作成する必要があった
-   変更が外部の機能に干渉しないよう配慮する必要があった

などの理由です。

特に、テストコードを書いた経験が無いことが足を引っ張り、

-   テスト作成用のライブラリ独自の仕様 (特定の命名で定義されたテスト関数は、自動で実行される)
-   明示的にエラーを発生させるraise
-   データ形式のチェックを行うassert

などの初めて遭遇する構文や概念の理解に手間取ってしまいました。

時間的な制約から全ての工程を完了することは困難に思えましたが、最終的には、根気とメンターの方々のサポートのお陰で**予定していた全ての実装を終える**ことができました。

![](/assets/cms/NxqgdRVEa1/s-548x464_webp_5935b16d-ff82-4e16-81e5-f62b920e8bb5.png)

メンター陣によるサポート

![](/assets/cms/NxqgdRVEa1/s-842x513_v-fs_webp_966901ee-4617-4ca0-a143-bcbc6c1fdd29.png)

実装対象の概要理解

以下に、作成したプログラムを示します。  
(1)既存機能に対するテストコード　及び  
(3)追加機能に対するテストコード

Python コード (1), (3)

    import time
    import unittest
    from unittest.mock import MagicMock
    
    from cti.logging import logger
    from cti.runner import RunnerSession
    from cti.pipelines import PipelineFactory
    from cti.pipelines.PredictorBatch import PredictorBatch
    from cti.types import Content
    from _test_utils import data
    
    
    class TestPredictorBatch(unittest.TestCase):
        def setUp(self):
            self.yolo_tiny_coco = {
                "model": "https://laplust.s3.ap-northeast-1.amazonaws.com/models/yolox-tiny_coco_544938a7.pth",
                "task": "ObjectDetection"
            }
            self.resnet_50_in1k = {
                "model": "https://laplust.s3.ap-northeast-1.amazonaws.com/models/resnet-50_in1k_56d6a43c.pth",
                "task": "ImageClassification"
            }
            self.mock_session = MagicMock(spec=RunnerSession)
            self.factory = PipelineFactory(
                session=self.mock_session,
                max_pipelines=2,
            )
    
        def tearDown(self):
            self.factory.process({"operation": "terminate_all"})
            self.assertEqual(len(self.factory.pipelines), 0)
    
        def createPipeline(self, params):
            pipeline_type = PredictorBatch
            params.update(pipeline=pipeline_type)
            result = self.factory.process(params)
            if result.error:
                return result
            self.assertEqual(len(self.factory.pipelines), 1)
            pipeline = self.factory.pipelines[0]
            self.assertIsInstance(pipeline, PredictorBatch)
            return pipeline
    
        def waitPipeline(self, pipeline, mock_callback):
            # waits for the process to end
            while pipeline.is_alive:
                time.sleep(1)
            self.assertIsNotNone(mock_callback.call_args_list)
        
            outputs_list = []
            for call_args in mock_callback.call_args_list:
                args, kwargs = call_args
                self.assertEqual(len(args), 1)
                outputs = args[0]
                self.assertIsInstance(outputs, dict)
                outputs_list.append(outputs)
            
            return outputs_list
    
        def test_missing_data_path(self):
            mock_callback = MagicMock()
    
            result = self.createPipeline({
                "agent": self.yolo_tiny_coco,
                "input": {
                    # "data_path": is missing
                },
                "output": mock_callback,
            })
            self.assertIsNotNone(result.error)
            self.assertIn("data_path", result.error)
    
        # =============================================================
        # For dir test functions
    
        def test_object_detection_for_dir(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.yolo_tiny_coco,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": mock_callback,
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("detections", outputs)
            self.assertIn("detections_image", outputs)
    
            # inspect vaild data is exist
            has_data = False
            for op in outputs_list:
                if len(op["detections"].data) > 0:
                    has_data =True
                    break
            self.assertTrue(has_data, "There are no vaild data entire outputs_list")
    
            # inspect image size
            self.assertTrue(outputs["detections_image"].data.size[0] > 0)
            self.assertTrue(outputs["detections_image"].data.size[1] > 0)
    
        def test_object_detection_with_content_for_dir(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.yolo_tiny_coco,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": ["detections"],
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("detections", outputs)
            self.assertNotIn("detections_image", outputs)
    
        def test_image_classification_for_dir(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": mock_callback,
            })
    
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
        def test_imag_classification_with_content_for_dir(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": ["topk"],
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
    
            mock_callback = MagicMock()
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": {"topk": 2},
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
            topk = outputs["topk"]
            self.assertIsInstance(topk, Content)
            topk = topk.data
            self.assertEqual(len(topk), 2)
    
            mock_callback = MagicMock()
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": {
                        "topk": {
                            "k": 3,
                            "fields": ["name"]
                        }
                    },
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
    
            topk = outputs["topk"]
            self.assertIsInstance(topk, Content)
            topk = topk.data
            self.assertEqual(len(topk), 3)
            self.assertIsInstance(topk[0], dict)
            self.assertIn("name", topk[0])
            self.assertEqual(len(topk[0]), 1)  # only 'name' field
    
        # =============================================================
        # For video test functions
    
    
        def test_object_detection_for_video(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.yolo_tiny_coco,
                "input": {
                    "data_path": data.get_video(),
                },
                "output": mock_callback,
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("detections", outputs)
            self.assertIn("detections_image", outputs)
    
            # inspect vaild data is exist
            has_data = False
            for op in outputs_list:
                if len(op["detections"].data) > 0:
                    has_data =True
                    break
            self.assertTrue(has_data, "There are no vaild data entire outputs_list")
    
            # inspect image size
            self.assertTrue(outputs["detections_image"].data.size[0] > 0)
            self.assertTrue(outputs["detections_image"].data.size[1] > 0)
    
        def test_object_detection_with_content_for_video(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.yolo_tiny_coco,
                "input": {
                    "data_path": data.get_video(),
                },
                "output": {
                    "contents": ["detections"],
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("detections", outputs)
            self.assertNotIn("detections_image", outputs)
    
        def test_image_classification_for_video(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.get_video(),
                },
                "output": mock_callback,
            })
    
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
        def test_imag_classification_with_content_for_video(self):
            mock_callback = MagicMock()
    
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": ["topk"],
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
            mock_callback = MagicMock()
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.get_video(),
                },
                "output": {
                    "contents": {"topk": 2},
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
    
            topk = outputs["topk"]
            self.assertIsInstance(topk, Content)
            topk = topk.data
            self.assertEqual(len(topk), 2)
    
            mock_callback = MagicMock()
            pipeline = self.createPipeline({
                "agent": self.resnet_50_in1k,
                "input": {
                    "data_path": data.IMAGE_PREFIX,
                },
                "output": {
                    "contents": {
                        "topk": {
                            "k": 3,
                            "fields": ["name"]
                        }
                    },
                    "callback": mock_callback,
                },
            })
            outputs_list = self.waitPipeline(pipeline, mock_callback)
            outputs = outputs_list[0]
            self.assertIn("topk", outputs)
    
    
            topk = outputs["topk"]
            self.assertIsInstance(topk, Content)
            topk = topk.data
            self.assertEqual(len(topk), 3)
            self.assertIsInstance(topk[0], dict)
            self.assertIn("name", topk[0])
            self.assertEqual(len(topk[0]), 1)  # only 'name' field
    

(2)動画が入力された場合、動画の各フレームに対して物体検出処理を実行する機能(追加機能)のコード

Python コード (2)

    import os
    from typing import (
        Mapping,
    )
    
    import cv2
    
    import lapt as la
    from cti.logging import logger
    from cti.env import abs_path, rel_path
    from cti.types import Content
    from ._registry import register_pipeline
    from ._types import RequestContext
    from .Predictor import (
        Predictor,
        EndOfData,
    )
    
    
    @register_pipeline
    class PredictorBatch(Predictor):
        terminate_on_error = True
    
        def setup_input(self):
            super().setup_input()
            p = self._params.get("input")
            if p is None:
                raise ValueError("`input` parameter is missing")
            if isinstance(p, str):
                p = {"data_path": p}
            if not isinstance(p, Mapping):
                raise TypeError(
                    "`input` expected a dictionary or string "
                    f"but got an {type(p).__name__}"
                )
            if "data_path" not in p:
                raise ValueError("`input.data_path` parameter is missing")
    
            path_rel = p["data_path"]
            if not isinstance(path_rel, str):
                raise TypeError(
                    "`input.data_path` expected a string "
                    f"but got an {type(p).__name__}"
                )
    
            # need for _progress function
            self.inputs = []
            self.current_index = 0
            self.data_len = 0
    
            path_abs = abs_path(path_rel)
            if not os.path.isdir(path_abs):
                # previously this was treated as an error
                if os.path.isfile(path_abs):
                    self.video_input = path_abs
                    self.cap = cv2.VideoCapture(self.video_input)
                    if not self.cap.isOpened():
                        raise ValueError(f"Failed road video {self.video_input}")
                    self.data_len = int(self.cap.get(cv2.CAP_PROP_FRAME_COUNT))
                    self.get_inputs = self._get_inputs_for_video
                else:
                    raise ValueError(f"Invalid format given {self.video_input}")
    
            # given dir_path, work as usual
            else:
                for prefix, dirs, files in os.walk(path_abs, topdown=False, followlinks=True):
                    prefix = rel_path(prefix)
                    for f in files:
                        self.inputs.append(os.path.join(prefix, f))
                self.data_len = len(self.inputs)
                self.get_inputs = self._get_inputs_for_dir
    
            if self.data_len <= 0:
                raise ValueError(f"data_total_len is invalid {self.data_len}")
    
        def _get_inputs_for_dir(self, timeout=None):
            try: 
                input = self.inputs[self.current_index]
                input_abs = abs_path(input)
                self.current_index += 1
                return RequestContext(
                    inputs={"data": Content.new(input_abs)},
                    # The `meta.src` will be used on the client side, so keep its original path.
                    meta={"src": input}
                )
            except IndexError:
                raise EndOfData("No more inputs in the batch")
            finally:
                if self.current_index % 100 == 0:
                    # Notify progress every 100 iterations
                    self.notify_state_changed()
    
        def _get_inputs_for_video(self, timeout=None):
            try:
                self.cap.set(cv2.CAP_PROP_POS_FRAMES, self.current_index)
                ret, frame = self.cap.read()
                if not ret:
                    raise EndOfData("No more inputs in the frame")
                self.current_index += 1
                return RequestContext(
                    inputs={"data": Content.new(la.types.Image(frame))},
                    # The `meta.src` will be used on the client side, so keep its original path.
                    # FIXME Because the receiving side does not support video source input,
                    #       the video file path is temporarily returned.
                    #       Ideally, the number of frames should also be returned.
                    meta={"src": self.video_input[5:]}
                )
            except IndexError:
                raise EndOfData("No more inputs in the frame")
            finally:
                if self.current_index % 100 == 0:
                    self.notify_state_changed()
                if self.current_index >= self.data_len:
                    self.cap.release()
                    raise EndOfData("No more inputs in the frame")
    
        def _progress(self):
            return float(self.current_index + 1) / self.data_len
    

![](/assets/cms/NxqgdRVEa1/s-444x383_webp_ddddc83a-5419-41ba-be4a-9668a9f34465.png)

成果物の一部抜粋 UI上でもわかりやすく表現

![](/assets/cms/NxqgdRVEa1/s-546x427_webp_174af930-6a20-4ea0-820b-d12aea1be843.png)

メンター陣に見守られながらの成果発表

### 起業について

私自身が起業に興味を持っており、LAplustが佐世保高専卒業生が起業した会社であることから、起業体験についてお話を伺いたい旨をお伝えしたところ快諾くださり、実務体験の合間に

-   LAplustが歩んできた道のり (事業内容、経営方針)
-   起業で優先的に対応すべき事項
-   サービスを売り出す上でのアドバイス
-   自身が抱えている課題についての相談

など、**率直かつ幅広く、惜しみなく知識と経験についてご教示いただきました。**

## **2\. 学び**

実務体験の新機能追加、テスト実装に取り組む過程で、チーム開発の基礎的な技術について学ぶことができました。

1.  **チーム開発の技術の習得**

今まで、プログラミングに力を入れてきた自信はあったのですが、チーム開発の経験は無かったため、

-   **Gitをはじめとするツールの基礎知識**
-   **開発を進める上でのコミュニケーション**

について習得できたことは、今後開発者になる上で大変意義深い経験だったと感じています。  
人の時間を無闇に奪わず、自分が手持ち無沙汰にならないように、Slackなどでやりとりの履歴を残すコミュニケーションと、対面でのコミュニケーションを使い分けることの重要性を学んだことに加え、Git上でのissueベースの議論についても経験しました。

また、大規模なプログラムを共同で作り上げていく上で必要となる、

-   **他人のコードを読み取る力**
-   **意図が明瞭に伝わるコーディング**
-   **プログラム全体を見通す俯瞰的な視点**

についても身につけることができました。  
具体的には、エラーの原因が特定しやすくなるエラーメッセージの書き方などです。 (以下コード)

    if not os.path.isdir(path_abs):
    		# previously this was treated as an error
    		if os.path.isfile(path_abs):
    		    self.video_input = path_abs
    		    self.cap = cv2.VideoCapture(self.video_input)
    		    if not self.cap.isOpened():
    		        raise ValueError(f"Failed road video {self.video_input}")
    		    self.data_len = int(self.cap.get(cv2.CAP_PROP_FRAME_COUNT))
    		    self.get_inputs = self._get_inputs_for_video
    		else:
    		    raise ValueError(f"Invalid format given {self.video_input}")

pythonコード(2)より一部抜粋

この例では、仮にエラーが出ても「〇〇という理由により、与えた××というデータは不適切である」ということが分かるので、原因の特定が容易になります。  
他にも、プログラム全体を通した変数、関数の命名規則の統一の重要性を再認識しました。

2\. **自己管理、マインドセットの習得**

毎日の活動や学びについて日報にまとめることが、

-   自分が**処理できるタスクの量にあたりを付ける**力
-   **想定外のバグなどを見通したスケジューリング**の感覚

について認識を深める機会となり、課題や次に取り組むべき行動を明確にすることの重要性を感じました。

起業に関するお話を伺ったり、私が起業に対して抱えている不明点や悩みについて相談する過程で、

-   **1人で考えるだけでは中々辿り着けない考え**
-   ネットで調べるだけでは得られない**個別の相談に対するアドバイス**

を得ることができました。

業務時間外も終始和やかな雰囲気で、技術要素に関する議論のみならず自分の考えを言語化することの重要性について指導いただいたり、高専トークに花を咲かせる場面もありました。

![](/assets/cms/NxqgdRVEa1/s-1024x768_v-fs_webp_bb5348e5-8a9b-4a79-930d-af2579a1f7d4.jpg)

皆さんとランチ

## **3\. まとめ**

私はLAplustのインターンシップ参加を通して、以上に示すような多くのことを学ぶことができました。  
LAplustのインターンシップは、技術に関する**興味を持ち、作りたい、学びたい、成長したい**と思っている学生の皆さんにとって非常に**刺激的で学びのある体験**になると思います。  
**是非多くの方にインターンシップに参加していただきたい**と思います。

## 担当 LAplust 取締役 原崎より

LAplustの「実践的AI開発インターンシップ」へのはじめてのインターン生として佐世保高専から村上さんをお迎えしました。

![](/assets/cms/NxqgdRVEa1/s-1024x631_v-fs_webp_789de81e-739b-4661-8fe9-ef4d746754ff.png)

村上さんの仕事ぶりをみて**よい意味でメンター陣の想定を裏切っていただきチーム一同驚き**でした。私が村上さんの仕事ぶりを見て感じたことを下記に示します。

-   自身が実装するうえで抱えている課題やそれをどのように解決していくか**を適切に言語化しメンター陣とのやりとりの中で具体的な業務を進めていく高いコミュニケーション能力**を示していただきました。**複数人で行う「チーム開発」には欠かせない素養**です。
-   メンター陣より与えられた業務にて、動画解析の実装方針に関する会話のなかで、村上さんが考えた設計方針についての**必要なライブラリの情報を自ら収集し「このように進めた方がいいと思います。」という提案を実施**いただきました。1コーディングだけではなく設計方針に関する提案をいただきました。これは**「目的意識/課題意識」を強くもって業務を遂行し、自分事として思考している証**だと思います。「目的意識/課題意識」を前提に置いた思考プロセスや思考習慣はあらゆる場面で汎用的に活用できる能力です。
-   **機械学習に関する深い理解とそれらを具体的なコードに落とし込む知恵**をお持ちで想定よりも多くの業務を進めていただくだけでなく、**弊社のプロダクトに寄与する「実践的なＡＩ開発」も実施いただきメンターのレビューをクリアし「プロダクトに採用」させていただきました。**AIの開発を専門に行うメンター陣も学びになりました。

![](/assets/cms/NxqgdRVEa1/s-1024x460_v-fs_webp_43555db4-239e-4ef0-b1e8-ac545b41cd57.png)

上記のことからLAplustより修了証を発行しました。

![](/assets/cms/NxqgdRVEa1/s-1248x1770_v-fms_webp_bb501dbd-3af2-45a4-adb9-09d552359a44.png)

慣れない環境でどんどん新しい知識のインプットがあり、それをとめどなくアウトプットするというハードな開発業務を通したインターンでしたがLAplustとしても実益ある時間でした。  
本当におつかれさまでした。

[技術ブログ一覧](https://laplust.com/category/other)

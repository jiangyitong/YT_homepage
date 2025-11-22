<script setup>

</script>

<template>
    <div class="project-content">
        <div class="project-content-margin" style="width: 84%; max-width: 1000px;">
            <div style="text-align: center;">
                <p class="text-2xl font-bold">The FiveCam Dataset</p>
                <p> Synchronized Raw-RGB Captures of <b>Five</b> Smartphone <b>Cam</b>eras <br>
                    Proposed in paper <RouterLink to="/project/uni-isp">Uni-ISP: Unifying the Learning of ISPs from Multiple Cameras</RouterLink>
                </p>
                <p>
                    <RouterLink to="/">Yitong Jiang</RouterLink>, Mingde Yao, Xingyu Meng, Muquan Yu, Tianfan Xue, and Jinwei Gu <br>
                    The Chinese University of Hong Kong
                </p>
            </div>

            <div style="text-align: center;">
                <img src="/pub-images/li2024uni-isp-dataset.jpg" style="width: 100%; max-width: 1000px;" /><br>
                <p style="text-align:justify; width: 98%; padding: 0 1% 0 1%;">
                    The preview of 3 scenes in our new dataset (left) and our capture devices (right). Each scene
                    includes synchronized sRGB-Raw pairs of five smartphone cameras: Apple iPhone 14 Pro Max, Google
                    Pixel 6 Pro, Huawei P40, Samsung Galaxy S20, and Xiaomi Mi 12. The raw images are visualized as XYZ
                    images here, which can be converted back to raw without loss.</p>
            </div>
            
            <p class="text-xl font-bold pt-8 text-left">Download</p>
            <p>We have provided the processed FiveCam dataset that used in training self-camera ISP tasks on 🤗 HuggingFace, with 2217 items for training and 247 items for testing (resolution in 1024*1024).</p>
            <p>
                <a class='g-button g-hoverable pushable g-non-selectable g-relative' href='https://huggingface.co/datasets/l-li/five-cam-xyz-rgb-1024/viewer/default/test'>
                    <i class='fa fa-eye'></i> Preview Self-Camera XYZ-RGB (Test Set)
                </a>
                <a class='g-button g-hoverable pushable g-non-selectable g-relative' href='https://huggingface.co/datasets/l-li/five-cam-xyz-rgb-1024/tree/main'>
                    <i class='fa fa-download'></i> Download Self-Camera XYZ-RGB
                </a>
                
            </p>
            <p class="text-xl font-bold pt-8 text-left">Data Format</p>
            Following are keys of each data item in self-camera XYZ-RGB datasets:
            <ul>
                <li>
                    <pre>raw_device</pre>
                    The name of the device that captures current raw (XYZ) image.
                </li>
                <li>
                    <pre>rgb_device</pre>
                    The name of the device that captures current RGB image. For self-camera dataset, value of  `rgb_device`` is the same as the one of `raw_device`.
                </li>
                <li>
                    <pre>raw_image</pre>
                    Resized & cropped XYZ image in PIL.Image format.
                </li>
                <li>
                    <pre>rgb_image</pre>
                    Resized & cropped RGB image in PIL.Image format.
                </li>
                <li>
                    <pre>raw_exif</pre>
                    The EXIF metadata extracted from the original DNG file.
                </li>
                <li>
                    <pre>rgb_exif</pre>
                    The EXIF metadata extracted from the original JPEG file.
                </li>
                <li>
                    <pre>scene_details</pre>
                    The extra metadata of the scene illuminance. Including scene tag, illuminance (lux), illuminance spectral curve, etc
                </li>
            </ul>
            <p>The original Raw-RGB full-resolution version will be available soon.</p>

            <p class="text-xl font-bold pt-8 text-left">Citation</p>
            <p>😊 Cite this paper if you find our dataset useful in your research. </p>
            <div class="code">
<pre>@article{li2024uni,
  title={Uni-ISP: Unifying the Learning of ISPs from Multiple Cameras},
  author={Li, Yitong and Yao, Mingde and Meng, Xingyu and Yu, Muquan and Xue, Tianfan and Gu, Jinwei},
  journal={arXiv preprint arXiv:2406.01003},
  year={2024}
}</pre>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    created() {
        document.title = `Uni-ISP`
    },
    data() {
        return {
            isImageLoading: true,
            isPopup: false,
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.project-content {
    display: flex;
    margin-top: 80px;
    margin-bottom: 40px;
    justify-content: center;
}

.project-content-margin {
    margin: 15px;
}

.centering {
    text-align: center;
}


.selected {
    transform: scale(1.05);
    border: 1px #20aaea solid;
    box-shadow: 0 0 9px #888888;
}

.code {
    padding: 5px;
    background-color: #eaeaea;
    color: #000000;
    font-style: normal;
    font-family: 'Courier New', Courier, monospace;
    white-space: pre;
    border-radius: 10px;
    overflow-y: scroll;
}
</style>


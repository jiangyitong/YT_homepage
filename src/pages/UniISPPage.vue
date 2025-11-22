<script setup>
import GCard from '@/components/card/GCard.vue';
// import GButton from '@/components/util/GButton.vue';
</script>

<template>
    <div class="project-content">
        <div class="project-content-margin" style="width: 84%; max-width: 1000px;">
            <div class="text-center">
                <p class="text-2xl font-bold">Uni-ISP: Unifying the Learning of ISPs from Multiple Cameras</p>
                <p>
                    <RouterLink to="/">Yitong Jiang</RouterLink>, Mingde Yao, Xingyu Meng, Muquan Yu, Tianfan Xue, and Jinwei Gu </p>
                <p> The Chinese University of Hong Kong </p>

                <img class src="/pub-images/li2024uni-isp-cover.jpg" style="width: 100%; max-width: 1000px;" /><br>
                <p style="text-align:justify; width: 98%; padding: 0 1% 0 1%;">
                    We propose <strong>Uni-ISP</strong>, a model that unifies the learning of inverse and forward ISP
                    behaviors of multiple cameras simultaneously. By leveraging the shared characteristics across
                    various camera ISPs, our method can achieve higher performance in inverse and forward ISP (A) compared to
                    previously learned ISP methods tailored for only one camera separately. Meanwhile, the
                    device-aware property of the Uni-ISP enables new cross-camera ISP applications for a learned ISP
                    model, including photographic appearance transfer (B and C), inter/extrapolation (D), and
                    zero-shot image forensics (E and F).
                </p>
            </div>

            <p class="text-xl font-bold pt-8 text-left">Method</p>
            <div style="text-align: center;">
                <img src="/pub-images/li2024uni-isp-model.jpg" style="width: 100%; max-width: 1000px;" /><br>
                <p style="text-align:justify; width: 98%; padding: 0 1% 0 1%;">
                    The model design of Uni-ISP. Uni-ISP contains two modules, the inverse ISP module and the forward
                    ISP module. Both two modules share the same structure. For visual simplicity, we draw the inverse
                    ISP moduleas a thumbnail, whose inner structure is the same as the forward ISP module. The
                    device-aware embeddings are optimizable parameters and will be selected to interact with the
                    bottleneck features via the DEIM during the training or inference.
                </p>
            </div>

            <p class="text-xl font-bold pt-8 text-left">New Dataset: FiveCam</p>
            <div style="text-align: center;">
                <img src="/pub-images/li2024uni-isp-dataset.jpg" style="width: 100%; max-width: 1000px;" /><br>
                <p style="text-align:justify; width: 98%; padding: 0 1% 0 1%;">
                    The preview of 3 scenes in our new dataset (left) and our capture devices (right). Each scene
                    includes synchronized sRGB-Raw pairs of five smartphone cameras: Apple iPhone 14 Pro Max, Google
                    Pixel 6 Pro, Huawei P40, Samsung Galaxy S20, and Xiaomi Mi 12. The raw images are visualized as XYZ
                    images here, which can be converted back to raw without loss.</p>
            </div>

            <p class="text-xl font-bold pt-8 text-left">Applications</p>
            <p class="text-lg font-bold pt-4 text-left">1. Inverse and Forward ISP</p>
            <div class="centering pt-4">
                <div class="g-card" style="width: 95%; max-width: 800px; padding: 15px">
                    <strong>Inverse ISP</strong>
                    <p></p>
                    <img style="width: 100%;" src="/pub-images/uni-isp/SelfCam-InverseISP.jpg">
                </div>
                <p></p>
                <div class="g-card pt-4 " style="width: 95%; max-width: 800px; padding: 15px">

                    <strong>Forward ISP</strong>
                    <p></p>
                    <img style="width: 100%;" src="/pub-images/uni-isp/SelfCam-ForwardISP.jpg">
                </div>
            </div>

            <p class="text-lg font-bold pt-4 text-left">Other Results - HDR Rendering:</p>
            <p class="text-left">Based on the inverse ISP ability learned by our model, we can convert a given sRGB back to the linear
                color space, and sythesize exposure stack to render HDR images.</p>
            <div class="centering">
                <GCard style="cursor: pointer;" v-for="(imgItem, index) in previews.hdrRendering.images" :backgroundCover="true"
                    :class="{ 'image-item': true, 'selected': (imgItem.id == previews.hdrRendering.selectedItem.id) }"
                    :backgroundImageUrl="previews.hdrRendering.root + '/' + imgItem.id + '-gt.jpg'"
                    @click="previews.hdrRendering.selectedItem = imgItem">
                    <div class="g-title-container">
                        <div>
                            <span class="g-title" style="color:white; font-weight: bold;"># {{ index + 1 }}</span>
                            <br />
                            <span class="g-sub-title" style="color:white"> Sample Scene </span>
                        </div>
                    </div>
                </GCard>
            </div>

            <div class="centering">
                <p><i class="fa fa-mouse-pointer"></i> <b>Click on a tag below</b> to switch among LDR input, HDR rendering results of each method, and
                    the ground truth.</p>
            </div>

            <div class="centering">
                <a v-for="model in previews.hdrRendering.models" :class="'g-button g-hoverable pushable g-non-selectable g-relative' + (model.id == previews.hdrRendering.selectedModel.id?' g-accent':'')" style="cursor: pointer;"
                @click="isImageLoading = true; previews.hdrRendering.selectedModel = model">{{ model.name }}</a>
                <!-- <GButton v-for="model in previews.hdrRendering.models"
                    :accent="model.id == previews.hdrRendering.selectedModel.id"
                    @click="isImageLoading = true; previews.hdrRendering.selectedModel = model">{{ model.name }}</GButton> -->
            </div>

            <div class="centering">
                <div>
                    <p> <strong>Selected Item: {{ previews.hdrRendering.selectedModel.name }}</strong><br />
                        <img class="g-card" style="width: 40%; max-width: 480px; margin: 20px;" @load="finishImageLoading()"
                            :src="previews.hdrRendering.root + '/' + previews.hdrRendering.selectedItem.id + '-' + previews.hdrRendering.selectedModel.id + '.jpg'" />
                    </p>
                </div>

            </div>

            <p class="text-lg font-bold pt-4 text-left">2. Photographic Appearance Transfer</p>
            <div class="centering">
                <img class="g-card" style="width: 95%; max-width: 800px; padding: 15px"
                    src="/pub-images/uni-isp/PhotoAppearanceTrans-Cmp.jpg">
                <p class="text-left">This transfer ability can be extended to video without explicit temporal design. Please refer to the
                    video section below.</p>
            </div>
            <p class="text-lg font-bold pt-4 text-left">3. Photographic Appearance Interpolation</p>
            <div class="centering">
                <img class="g-card" style="width: 95%; max-width: 800px; padding: 15px"
                    src="/pub-images/uni-isp/Interpolation3-Full.jpg">
            </div>
            <p class="text-lg font-bold pt-4 text-left">4. Zero-shot Image Forensics</p>
            <p class="text-left">Uni-ISP has bonus ability in zero-shot image forensics, including source camera identification and image
                splice detection, without any trainig on forensics datasets. Please refer to the paper for more details.
                Here we show an example of image splice detection. A fake object is integrated into each real photo
                using Poisson image editing, with darker regions in the result indicating suspected modifications.</p>
            <div class="centering">
                <img class="g-card" style="width: 95%; max-width: 500px; padding: 15px"
                    src="/pub-images/uni-isp/SpliceDetection2.jpg">
            </div>

            <p class="text-xl font-bold pt-8 text-left">Video</p>
            <Transition name="scale" mode="out-in">
                <div v-if="!isPlayingVideo">
                    <p class="text-left">Click on the button to view the short introduction video of Uni-ISP. It might take a while to load this video.</p>
                    <p style="text-align: center; font-size: x-large">
                        <a class="g-button g-hoverable pushable g-non-selectable g-relative" style="cursor: pointer; padding: 25px" @click="isPlayingVideo = true">
                            <i class="fa fa-play"></i> Play Introduction Video
                        </a>
                    </p>
                </div>
                <div style="text-align: center;"  v-else>
                    <video class="g-card" id="media" src="/pub-videos/li2024uni-isp-video.mp4" controls autoplay
                        style="width: 100%; max-width: 1000px;"></video>
                </div>
            </Transition>

            <p class="text-xl font-bold pt-8 text-left">Citation</p>
            <p class="text-left">😊 Cite this paper if you find our work/dataset useful in your research. </p>
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
            isPlayingVideo: false,
            previews: {
                hdrRendering: {
                    selectedItem: {
                        id: "1",
                        dataset: "FiveCam"
                    },
                    selectedModel: { name: 'Input (LDR)', id: 'input' },
                    models: [
                        { name: 'Input (LDR)', id: 'input' },
                        { name: 'CIE-XYZ Net', id: 'cie-xyz-net' },
                        { name: 'CycleISP', id: 'cycle-isp' },
                        { name: 'InvISP', id: 'inv-isp' },
                        { name: 'ParamISP', id: 'param-isp' },
                        { name: 'Uni-ISP (Ours)', id: 'uni-isp' },
                        { name: 'GT (HDR)', id: 'gt' },
                    ],
                    images: [
                        {
                            id: "2",
                            dataset: "FiveCam"
                        },
                        {
                            id: "1",
                            dataset: "FiveCam"
                        },
                    ],
                    root: "/pub-images/uni-isp/hdr-rendering"
                }
            },
        }
    },
    methods: {
        finishImageLoading() {
            this.isImageLoading = false
        }
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


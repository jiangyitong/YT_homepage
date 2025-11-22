<script setup>
import GCard from '@/components/card/GCard.vue';
import VideoBackground from '@/features/video-background'
</script>

<template>
    <div>
    <video-background src="/pub-videos/li2024nvcomposer-landing-video.mp4" style="max-height: 300px; height: 300px;"
        overlay="linear-gradient(0deg, #ffffffff, #ffffff80)">
        <div style="text-align: center; height: 100%; display: flex; justify-content: center; align-items: middle; ">
            <div class="project-content-margin" style="text-shadow: 0 0 7px #ffffff;">
                <p class="text-2xl font-bold p-4">NVComposer: Boosting Generative Novel View Synthesis with Multiple Sparse and Unposed Images
                </p>
                <p>
                    <small><RouterLink to="/">Yitong Jiang</RouterLink> <sup>1</sup>, 
                        <a href="https://zzyfd.github.io">Zhaoyang Zhang</a> <sup>2†‡</sup>, 
                        <a href="https://yaoweili22.github.io">Yaowei Li</a> <sup>3</sup>,
                        <a href="https://scholar.google.com/citations?user=SO-JS9EAAAAJ">Jiale Xu</a> <sup>2</sup>, 
                        <a href="https://wbhu.github.io">Wenbo Hu</a> <sup>2</sup>, 
                        <a href="https://xiaoyu258.github.io">Xiaoyu Li</a> <sup>2</sup>, 
                        <a href="https://scholar.google.com/citations?user=gP-UxcoAAAAJ">Weihao Cheng</a> <sup>2</sup>,
                        <a href="https://www.gujinwei.org">Jinwei Gu</a> <sup>1</sup>, 
                        <a href="https://tianfan.info">Tianfan Xue</a> <sup>1‡</sup>, 
                        <a href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ">Ying Shan</a> <sup>2</sup></small> <br>
                    <small>1 The Chinese University of Hong Kong &nbsp;&nbsp; 2 ARC Lab, Tencent PCG &nbsp;&nbsp; 3 Peking University &nbsp;&nbsp; † Project Lead. &nbsp;&nbsp; ‡ Corresponding authors. </small>
                </p>
                <p><b>CVPR 2025</b></p>
            </div>
        </div>
    </video-background>

    <div class="project-content">
        <div style="width: 88%; max-width: 900px; margin: 0;">
            <Transition name="scale" mode="out-in">
                <div style="text-align: center; aspect-ratio: 1.77;" v-if="!isPlayingVideo">
                    <g-card class="ken-burn-wrapper g-pushable g-non-selectable"
                        style="width: 100%; max-width: 100%; height: 100%; aspect-ratio: 1.77; margin: 0; cursor: pointer; "
                        @click="isPlayingVideo = true">
                        <div class="ken-burn-image">
                            <img src="/pub-images/li2024nvcomposer-video-cover.jpg">
                        </div>
                        <div
                            style="color: #666; text-align: center; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                            <i class="fa fa-film" style="font-size: 48px;"></i>
                            <p style="font-size: large; font-weight: bold;">Introduction Video <br>
                                <small><i class="fa fa-mouse-pointer"></i> Click to Play</small>
                            </p>
                        </div>
                    </g-card>
                </div>
                <div style="text-align: center;" v-else>
                    <video class="g-card" id="media" src="/pub-videos/li2024nvcomposer-video.mp4" controls autoplay
                        style="width: 90vw; max-width: 100%; margin-top: 10px;"></video>
                </div>
            </Transition>

            <p class="text-xl font-bold pt-4">Method</p>
            <p>
                NVComposer contains 1) an image-pose dual-stream diffusion model that
                generates novel views while implicitly estimating camera poses for conditional images, and 2) a
                geometry-aware feature alignment adapter that uses geometric priors distilled from pretrained dense
                stereo models.
            </p>
            <div style="text-align: center;">
                <img src="/pub-images/li2024nvcomposer-model.jpg" style="width: 100%; max-width: 1000px;" /><br>
            </div>
            
            <p class="text-xl font-bold pt-4">Results</p>
            <g-card style="width: 100%; margin: 0;">
                <div class="result-video-container">
                    <video src="/pub-videos/NVComposerWebpageClips-Scene-1.mp4" autoplay loop controls
                        class="result-video-item"></video>
                    <video src="/pub-videos/NVComposerWebpageClips-Scene-2.mp4" autoplay loop controls
                        class="result-video-item"></video>
                </div>
                <div class="result-video-container">
                    <video src="/pub-videos/NVComposerWebpageClips-Scene-3.mp4" autoplay loop controls
                        class="result-video-item"></video>
                    <video src="/pub-videos/NVComposerWebpageClips-Scene-4.mp4" autoplay loop controls
                        class="result-video-item"></video>
                </div>
                <div class="result-video-container">
                    <video src="/pub-videos/NVComposerWebpageClips-Object-1.mp4" autoplay loop controls
                        class="result-video-item"></video>
                    <video src="/pub-videos/NVComposerWebpageClips-Object-2.mp4" autoplay loop controls
                        class="result-video-item"></video>
                </div>
            </g-card>
            
            <p class="text-xl font-bold pt-4">More...</p>
            <div class="result-video-container">
                <g-card class="ken-burn-wrapper g-pushable g-non-selectable action-button"
                    @click="redirectTo('https://github.com/TencentARC/NVComposer')">
                    <div class="ken-burn-image">
                        <img src="/pub-images/li2024nvcomposer-model.jpg">
                    </div>
                    <div
                        style="color: #666; text-align: center; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                        <i class="fa fa-code" style="font-size: 48px;"></i>
                        <p style="font-size: large; font-weight: bold;">Code<br>
                            <small>View on Github</small>
                        </p>
                    </div>
                </g-card>
                <g-card class="ken-burn-wrapper g-pushable g-non-selectable action-button"
                    @click="$emit('showNVComposerDemoModal')">
                    <div class="ken-burn-image">
                        <img src="/pub-images/li2024nvcomposer-huggingface-space-demo.jpg">
                    </div>
                    <div
                        style="color: #666; text-align: center; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                        <i class="fa fa-gamepad" style="font-size: 48px;"></i>
                        <p style="font-size: large; font-weight: bold;"> Online Demo<br>
                            <small>View on HF Space</small>
                        </p>
                    </div>
                </g-card>
                <g-card class="ken-burn-wrapper g-pushable g-non-selectable action-button"
                    @click="redirectTo('https://arxiv.org/abs/2412.03517')">
                    <div class="ken-burn-image">
                        <img src="/pub-images/li2024nvcomposer-arxiv.jpg">
                    </div>
                    <div
                        style="color: #666; text-align: center; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);">
                        <i class="fa fa-file" style="font-size: 48px;"></i>
                        <p style="font-size: large; font-weight: bold;">Preprint Paper<br>
                            <small>View on ArXiv</small>
                        </p>
                    </div>
                </g-card>
            </div>

            
            <p class="text-xl font-bold pt-4">Limitation</p>
            <p>As a generative model, NVComposer may occasionally produce unexpected outputs. Try adjusting the random seed, sampling steps, or CFG scales to explore different results. <br>
            This is the initial beta version of NVComposer which is mainly trained on datasets like RealEstate10K, and its generalizability may be limited in certain scenarios. 
            We’re actively working on an improved version with enhanced datasets and a more powerful foundation model. <br>
            🤗 We welcome your feedback, questions, or collaboration opportunities. Thank you for trying NVComposer!</p>
            
            <p class="text-xl font-bold pt-4">Citation</p>
            <p>😊 Cite this paper if you find our work helpful in your research. </p>

            <div class="code">
                <pre>@article{li2024nvcomposer,
  title={NVComposer: Boosting Generative Novel View Synthesis with Multiple Sparse and Unposed Images},
  author={Li, Yitong and Zhang, Zhaoyang and Li, Yaowei and Xu, Jiale and Hu, Wenbo and Li, Xiaoyu and Cheng, Weihao and Gu, Jinwei and Xue, Tianfan and Shan, Ying},
  journal={arXiv preprint arXiv:2412.03517},
  year={2024}
}</pre>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
export default {
    created() {
        document.title = `NVComposer`
    },
    data() {
        return {
            isImageLoading: true,
            isPopup: false,
            isPlayingVideo: false
        }
    },
    emits: ['showNVComposerDemoModal', 'showModal'],
    methods: {
        finishImageLoading() {
            this.isImageLoading = false
        },
        redirectTo(url) {
            window.location = url
        }
    }
}
</script>

<style scoped>
.project-content {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.project-content-margin {
    margin: 15px;
    margin-top: 80px;
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

.result-video-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.result-video-item {
    flex: 1;
    /* width: calc((100% - 10px)/2); */
    max-width: calc((100% - 10px)/2)
}

.action-button {
    flex: 1;
    width: 50%;
    max-width: 50%;
    aspect-ratio: 1.5;
    margin: 0;
    cursor: pointer;
}

@media screen and (max-width: 900px) {
    .result-video-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .result-video-item {
        flex: 1;
        width: calc(100% - 10px);
        max-width: calc(100% - 10px)
    }

    .action-button {
        flex: 1;
        width: 100%;
        max-width: 100%;
        aspect-ratio: 2;
        margin: 0;
        cursor: pointer;
        aspect-ratio: 2.4;
    }

}
</style>


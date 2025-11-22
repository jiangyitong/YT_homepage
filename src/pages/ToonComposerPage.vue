<script setup>
import VideoBackground from '@/features/video-background'

import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

import MorphingText from '@/components/text/morphing-text/MorphingText.vue';
import RadiantText from '@/components/text/radiant-text/RadiantText.vue';
import ContainerScroll from '@/components/layout/container-scroll/ContainerScroll.vue';

// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: "fade",
    autoplay: 5000
}

const isDark = computed(() => useColorMode().value == "dark");
const shadowColor = computed(() => (isDark.value ? "white" : "black"));

const sloganTexts = [
    "From Sketch to Cartoon Magic ✨",
    "Anime, Your Way 🎨",
    "A Frame, A Lineart, A Cartoon 🎬",
]

const demoVideos = [
    { src: '/pub-videos/ToonComposer/Clip1.mp4', title: 'Scene Clip 1' },
    { src: '/pub-videos/ToonComposer/Clip2.mp4', title: 'Scene Clip 2' },
    { src: '/pub-videos/ToonComposer/Clip3.mp4', title: 'Scene Clip 3' },
]
</script>

<template>
    <div>
        <video-background class="fixed z-0" src="/pub-videos/li2025tooncomposer-landing-video.mp4"
            style="max-height: 320px; height: 320px;" overlay="linear-gradient(0deg, #ffffffff, #ffffff80)">
            <div class="mt-24">
                <div class="flex flex-col flex-wrap justify-center items-center text-center">
                    <RadiantText
                        class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                        :duration="5">
                        <span class="text-5xl font-bold">ToonComposer</span>
                    </RadiantText>
                    <MorphingText class="text-center text-xl lg:text-xl text-gray-600 dark:text-white"
                        :texts="sloganTexts" coolDownTime="2"/>
                    <p>
                        <small>
                            <RouterLink to="/">Yitong Jiang</RouterLink> <sup>1</sup>,
                            <a href="http://gzwang.xyz">Guangzhi Wang</a> <sup>2*†</sup>,
                            <a href="https://zzyfd.github.io">Zhaoyang Zhang</a> <sup>2*†</sup>, 
                            <a href="https://yaoweili22.github.io">Yaowei Li</a> <sup>3</sup>,
                            <a href="https://xiaoyu258.github.io">Xiaoyu Li</a> <sup>2</sup>, 
                            <a href="https://www.cse.cuhk.edu.hk/~qdou">Qi Dou</a> <sup>1</sup>,
                            <a href="https://www.gujinwei.org">Jinwei Gu</a> <sup>1</sup>,
                            <a href="https://tianfan.info">Tianfan Xue</a> <sup>1†</sup>, 
                            <a href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ">Ying Shan</a> <sup>2</sup>
                        </small> <br>
                        <small>1 The Chinese University of Hong Kong &nbsp;&nbsp; 2 ARC Lab, Tencent PCG
                            &nbsp;&nbsp; 3
                            Peking
                            University  &nbsp;&nbsp;  * Project Lead. &nbsp;&nbsp; † Corresponding authors. </small>
                    </p>
                    <p class="p-2">Contents in this page are for academic illustration only.</p>
                </div>
            </div>
        </video-background>

        <div class="w-full text-center mt-4">
            <iframe class="g-card max-w-full w-[480px] md:w-[600px] lg:w-[700px] mx-auto h-[270px] md:h-[338px] lg:h-[394px]" src="https://www.youtube.com/embed/bk11g3hZX5s?si=CtNB8LWt4QaitITB"
                    title="ToonComposer Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <!-- <video class="g-card" id="media" src="/pub-videos/li2025tooncomposer-video.mp4" controls autoplay
                style="width: 90vw; max-width: 100%; margin-top: 10px;"></video> -->
        </div>

        <div class="m-8"></div>

        <div class="flex flex-col md:flex-row lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4 md:gap-8 gap-4 items-center justify-center">
            <div class="hidden md:block md:basis-1/5">
                <img src="/pub-images/tooncomposer/slump_bad_woman_paint.png" class="max-w-[160px] md:max-w-[160px]" />
            </div>
            <div class="basis-3/4 md:basis-3/5 text-left">
                <p class="text-md text-gray-500">
                    Traditional anime production is time-consuming, requiring skilled artists for keyframing,
                    inbetweening, and colorization. <br />
                    <b>ToonComposer</b> streamlines this with generative AI, turning hours of manual work into a
                    single, seamless process.
                </p>
            </div>
            <div class="basis-1/4 md:basis-1/5">
                <img src="/pub-images/tooncomposer/tv_video_hensyu_hard.png" class="max-w-[180px] md:max-w-[180px]" />
            </div>
        </div>

        <div class="m-8"></div>

        <div class="flex flex-col md:flex-row lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4 md:gap-8 gap-4 items-center justify-center">
            <div class="basis-full md:basis-1/2 text-left">
                <p class="text-xl font-bold text-gray-800">Generative Post-Keyframing</p>
                <p class="text-md text-gray-500">
                    Say goodbye 👋 to complex workflows. <br />
                    <b>ToonComposer</b> runs on the Post-Keyframing stage,
                    which uses generative AI to combine inbetweening and colorization,
                    creating cartoon videos from just one sketch and a colored frame. <br />
                    Save up to <b>70%</b> of manual effort and focus on what matters, your creativity.
                </p>
            </div>
            <div class="basis-full md:basis-1/2">
                <div class="g-card p-2">
                    <img src="/pub-images/tooncomposer/workflow-cmp.jpg" class="w-full md:max-w-full" />
                </div>
            </div>
        </div>

        <div class="m-8"></div>

        <div class="flex md:flex-row flex-col items-center lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-1 p-4">
            <div class="basis-full md:basis-1/2 lg:basis-1/3 pt-2">
                    <!-- Video Carousel Section -->
                    <Carousel v-bind="carouselConfig" class="g-card m-4 max-w-full mx-auto">
                        <Slide v-for="demoVideo in demoVideos" :key="demoVideo.xsrc">
                            <template #default="{ isActive, isVisible }">
                                <video :src="demoVideo.src" class="carousel__item" autoplay muted loop></video>
                            </template>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                    <!-- <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                        @click="isPlayingVideo = true">
                        <span class="p-2 text-lg font-bold"><i class="fa fa-play"></i> Watch Full Demo Video</span>
                    </a> -->
            </div>
            <div class="basis-full md:basis-1/2 lg:basis-2/3 text-left md:pl-8">
                <p class="text-xl font-bold text-gray-800">Precise Sketch Keyframe Control</p>
                <p class="text-md text-gray-500">
                    ToonComposer’s sketch-based keyframe control lets artists guide animations with sparse keyframes at any point
                    in the timeline. <br />
                    It handles complex motions with precision, delivering consistent, high-quality results that are
                    comparable to conventional pipeline of manual inbetweening and colorization.
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-items-start lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pb-4 pl-4 pr-4">
        <div class="basis-full">
                <div class="g-card p-2">
                    <img src="/pub-images/tooncomposer/precise-frame-control.jpg" class="w-full max-w-full" />
                </div>
            </div>
        </div>
        <div class="m-8"></div>

        <div class="flex flex-col justify-items-start lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4">
            <div class="basis-full md:basis-1/2 md:grow text-left">
                <p class="text-xl font-bold text-gray-800">Region-wise Control</p>
                <p class="text-md text-gray-500">
                    Boost creation with region-wise control. <br />
                    You can optionally leave sketch areas blank and indicate them with a brush tool. ToonComposer
                    intelligently fills them using context or prompts.
                </p>
            </div>
            <div class="basis-full md:basis-1/2 pt-2">
                <div class="g-card p-2">
                    <img src="/pub-images/tooncomposer/region-wise.jpg" class="w-full max-w-full" />
                </div>
            </div>
        </div>

        <div class="m-8"></div>

        <div class="flex md:flex-row lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4 gap-4 items-center">
            <div class="basis-4/5 md:basis-5/6 text-left">
                <p class="text-xl font-bold text-gray-800">Acknowledgements</p>
                <p class="text-md text-gray-500">
                    Heartfelt thanks to <b>B&T Studio</b> and <b>Gudong Animation Studio</b> for their permission to use
                    their animation content (Big Fish & Begonia and Mr. Miao) for academic illustration. We appreciate the video foundation model <b>Wan</b> and other opensource tools for powering
                    ToonComposer. 
                    We thank <b>Irasutoya</b> for these cute character images used in this page.
                </p>

            </div>
            <div class="basis-1/5 md:basis-1/6">
                <img src="/pub-images/tooncomposer/thanks.png" class="w-[120px] md:max-w-[120px]" />
            </div>
        </div>

        <div class="flex flex-col overflow-hidden md:pt-2 md:pb-8 pt-16 pb-8">
            <ContainerScroll>
                <template #title>
                    <div class="flex items-center justify-center p-2">
                        <div class="basis-1/3 text-right">
                            <img src="/pub-images/tooncomposer/slump_good_woman_paint.png" class="w-3xs md:max-w-3xs" />
                        </div>
                        <div class="basis-2/3 text-right">
                            <p class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                                Try Demo of <br />
                                <RadiantText
                                    class="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                                    :duration="5">
                                    <span class="text-2xl md:text-5xl font-bold">ToonComposer</span>
                                </RadiantText>
                            </p>
                            <p class="text-md md:text-md text-gray-500">
                                Experience the streamlined cartoon production.
                                <br />
                                Create professional-quality cartoons with ease.
                            </p>
                        </div>
                    </div>

                </template>
                <template #card>
                    <img @click="$emit('showToonComposerDemoModal')"
                        src="/pub-images/tooncomposer/demo.png"
                        class="cursor-pointer mx-auto h-full rounded-2xl object-cover object-left-top hover:scale-101 active:scale-99 transition-all duration-300"
                        alt="hero" height="720" width="1400" />
                </template>
            </ContainerScroll>
        </div>

        <div class="flex flex-col md:flex-row lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4 gap-4 items-center">
            <div class="basis-full md:basis-4/5 text-left">
                <p class="text-xl font-bold text-gray-800">Disclaimer</p>
                <p class="text-md text-gray-500">
                    All images, videos, and other materials presented on this page are used solely for academic and research purposes.
                    ToonComposer is a research project and is not intended for commercial use.
                </p>

            </div>
            <div class="basis-full md:basis-1/5">
                <img src="/pub-images/tooncomposer/science_nou_kenkyu.png" class="w-[200px] md:max-w-[200px]" />
            </div>
        </div>

        <div class="flex flex-col md:flex-row lg:ml-24 lg:mr-24 md:pl-16 md:pr-16 md:pt-4 md:pb-4 p-4 gap-4 items-center">
            
            <div class="basis-full md:basis-4/5 text-left">
                <p class="text-xl font-bold text-gray-800">⚠️ Unauthorized Site Notice</p>
                <p class="text-md text-gray-500">
The website https://tooncomposer.com is <b>NOT</b> hosted, authorized, or endorsed by the ToonComposer team. This site has replicated content from our open-source project without our permission or notification, and we are unaware of the operators’ identity or intentions.
<br><br><b>Access ToonComposer via our verified channels:</b><br>
HuggingFace Demo: <a href="https://huggingface.co/spaces/TencentARC/ToonComposer">https://huggingface.co/spaces/TencentARC/ToonComposer</a><br>
Github Repo.: <a href="https://github.com/TencentARC/ToonComposer">https://github.com/TencentARC/ToonComposer</a><br>
Official Page: <a href="https://lg-li.github.io/project/tooncomposer">https://lg-li.github.io/project/tooncomposer</a>
                </p>

            </div>
            <div class="basis-full md:basis-1/5">
                <img src="/pub-images/tooncomposer/website_phishing.png" class="w-[230px] md:max-w-[230px]" />
            </div>
        </div>

        <div class="m-8"></div>

    </div>
</template>

<script>
export default {
    created() {
        document.title = `ToonComposer`
    },
    data() {
        return {
            isImageLoading: true,
            isPopup: false,
            isPlayingVideo: false
        }
    },
    emits: ['showModal'],
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


</style>

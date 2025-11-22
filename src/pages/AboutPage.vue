<script setup>
import { RouterLink } from 'vue-router';
import Avatar from '@/components/Avatar.vue';
import { CardContainer, CardBody, CardItem } from '@/components/card/card-3d';
</script>

<template>
  <div class="mt-24 mb-4 ml-4 mr-4 max-w-screen">
    <!--Left Column-->
    <div class="flex flex-row gap-4 flex-wrap justify-center">
      <div class="lg:basis-3/10 basis-full lg:max-w-3/10 max-w-full">
        <div class="lg:sticky lg:top-24">
          <Avatar class="g-hoverable"></Avatar>
          <!-- <div class="g-card g-hoverable g-pushable avatar"></div> -->
          <!-- <img :src="ImageAvatar" style="width: 100%; padding-top: 10%;" alt="<strong>Yitong Jiang</strong>" />
        </div> -->
          <p class="text-center text-xl font-bold p-2">
            <strong>Yitong Jiang</strong>
          </p>
          <p class="text-center p-2">Ph.D. Student at<br> <b>The Chinese University of Hong Kong</b></p>
                      <p class="text-center p-2">
              <b>Research Interests</b>
              <br> 🤖  Multimodal models
              <br> 🧠  Efficient vision foundation models
              <br> 📷  Computational Photography
            </p>
          <div class="flex flex-wrap gap-4 justify-center p-2">
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0);"
              @click="showMail()">
              <i class="fa fa-envelope"></i> Email</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="./resume/YitongJ_CV.pdf" target="_blank">
              <i class="fa fa-file-text"></i> Resume</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="https://scholar.google.com/citations?user=5gStTm4AAAAJ&hl=en" target="_blank">
              <i class="fa fa-graduation-cap"></i> Scholar</a>
            <a class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="https://github.com/jiangyitong" target="_blank">
              <i class="fa fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
      <!--Right Column-->
      <div class="lg:basis-6/10 basis-full lg:max-w-6/10 max-w-full">
        <p class="p-4 leading-relaxed text-left">
          I am a Ph.D. student at The Chinese University of Hong Kong, advised by Prof. <a class="link"
            href="https://gujinwei.org">Jinwei Gu</a>, Prof. <a class="link" href="https://tianfan.info">Tianfan
            Xue</a> and Dr. <a class="link" href="https://sifeiliu.net">Sifei Liu</a>. My research interests include Multimodal, efficient vision foundation models, computational photography/imaging and low-level vision.
        </p>
        <p class="text-xl font-bold p-4">Research</p>
        <div class="flex flex-col gap-3 max-w-full">
          <CardContainer class="w-full max-w-full" v-for="researchItem in researchItems" :key="researchItem.title"
            :container-class="'p-0'">
            <CardBody
              class="group/card relative w-full max-w-full h-auto rounded-xl border border-black/[0.1] bg-white p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] g-shadow pointer-events-auto">
              <div class="flex flex-row gap-4 items-center" style="transform-style: preserve-3d;">
                <CardItem :translate-z="55" class="shrink-0">
                  <img :src="researchItem.background" alt="cover"
                    class="w-30 h-60 sm:w-40 sm:h-40 md:w-50 md:h-40 lg:w-50 lg:h-40 rounded-lg object-cover shadow-xl" />
                </CardItem>
                <div class="flex-1 min-w-0" style="transform-style: preserve-3d;">
                  <CardItem :translate-z="50" class="text-lg font-bold text-neutral-700 dark:text-white">
                    <span class="w-full">{{ researchItem.title }}</span>
                  </CardItem>
                  <CardItem as="p" :translate-z="40" class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    <b class="text-neutral-500 dark:text-neutral-400">{{ researchItem.venue }}<br /></b>
                    <span v-html="researchItem.authors"></span>
                    <span v-if="researchItem.note" class="block text-xs italic text-neutral-500 dark:text-neutral-400 mt-1">
                      {{ researchItem.note }}
                    </span>
                  </CardItem>
                  <CardItem :translate-z="60" class="shrink-0">
                    <div class="mt-3 flex flex-wrap gap-2">
                      <template v-for="operationItem in researchItem.operations" :key="operationItem.buttonName">
                        <a v-if="operationItem.action == 'modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showModal', operationItem.modalTitle, operationItem.modalContent)"><i
                            :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'nvcomposer-demo-modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showNVComposerDemoModal')"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'tooncomposer-demo-modal'"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" href="javascript:void(0)"
                          @click="$emit('showToonComposerDemoModal')"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <a v-else-if="operationItem.action == 'link' && operationItem.link"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative"
                          :href="operationItem.link"><i :class="'fa ' + operationItem.buttonIcon"></i> {{
                            operationItem.buttonName }}</a>
                        <span v-else-if="operationItem.action == 'link' && !operationItem.link"
                          class="g-button g-non-selectable g-relative opacity-50 cursor-not-allowed">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                          <span class="text-xs ml-1">(coming soon)</span>
                        </span>
                        <RouterLink v-else-if="operationItem.action == 'route' && operationItem.link"
                          class="g-button g-hoverable g-pushable g-non-selectable g-relative" :to="operationItem.link">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                        </RouterLink>
                        <span v-else-if="operationItem.action == 'route' && !operationItem.link"
                          class="g-button g-non-selectable g-relative opacity-50 cursor-not-allowed">
                          <i :class="'fa ' + operationItem.buttonIcon"></i> {{ operationItem.buttonName }}
                          <span class="text-xs ml-1">(coming soon)</span>
                        </span>
                      </template>
                    </div>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <!--Services-->
        <p class="text-xl font-bold p-4">Services</p>
        <div class="pl-4 pr-4 pb-4">
          <p> <b>Conference Reviewer</b>
            <br> CVPR / ICCV / ECCV / WACV 
          </p>
          <p> <b>Journal Reviewer</b>
            <br> IEEE TPAMI / TIP
          </p>
        </div>

        <p class="text-xl font-bold p-4">Teaching</p>
        <div class="pl-4 pr-4 pb-4">
          <p> <b>CSCI3330 Teaching Assistant</b> <br>Fundamentals of Applied Computer Vision (2024 Spring) </p>
          <p> <b>CSCI2720 Teaching Assistant</b> <br>Building Web Applications (2024 Fall) </p>
          <p> <b>CSCI3310 Teaching Assistant</b> <br>Mobile Computing and Applications Development (2025 Spring) </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    document.title = `Yitong's Homepage`
  },
  data() {
    return {
      researchItems: [
        {
          title: 'Token-Efficient VLM: High-Resolution Image Understanding via Dynamic Region Proposal',
          authors: '<strong>Yitong Jiang</strong>, Jinwei Gu, Tianfan Xue, Ka Chun Cheung, Pavlo Molchanov, Hongxu Yin, Sifei Liu',
          venue: 'ICCV 2025',
          date: '2025/10/01',
          background: './pub-images/TEVA.png',
          note: 'Project done at NVIDIA Research',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/ICCV2025/papers/Jiang_Token-Efficient_VLM_High-Resolution_Image_Understanding_via_Dynamic_Region_Proposal_ICCV_2025_paper.pdf'
            },
            {
              action: 'route',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: ''
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: ''
            }
          ]
        },
        {
          title: 'GSPN-2: Efficient Parallel Sequence Modeling',
          authors: 'Hongjun Wang, <strong>Yitong Jiang</strong>, Collin McCarthy, David Wehr, Hanrong Ye, Xinhao Li, Ka Chun Cheung, Wonmin Byeon, Jinwei Gu, Ke Chen, Kai Han, Hongxu Yin, Pavlo Molchanov, Jan Kautz, Sifei Liu',
          venue: 'NeurIPS 2025',
          date: '2025/10/01',
          background: './pub-images/GSPN-2.png',
          note: 'Project done at NVIDIA Research',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openreview.net/pdf?id=9yG7LGYfHS'
            },
            {
              action: 'route',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: ''
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: ''
            }
          ]
        },
        {
          title: 'AutoDIR: Automatic all-in-one image restoration with latent diffusion',
          authors: '<strong>Yitong Jiang</strong>, Zhaoyang Zhang, Tianfan Xue, Jinwei Gu',
          venue: 'ECCV 2024',
          date: '2024/09/01',
          background: './pub-images/AutoDIR.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/abs/2310.10123'
            },
            {
              action: 'link',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://jiangyitong.github.io/AutoDIR_webpage/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/jiangyitong/AutoDIR'
            }
          ]
        },
        {
          title: 'Real-time Controllable Denoising for Image and Video',
          authors: 'Zhaoyang Zhang*, <strong>Yitong Jiang</strong>*, Wenqi Shao, Xiaogang Wang, Ping Luo, Kaimo Lin, Jinwei Gu',
          venue: 'CVPR 2023',
          date: '2023/12/5',
          background: './pub-images/Real-time_Controllable.png',
          note: '* Equal contribution',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Real-Time_Controllable_Denoising_for_Image_and_Video_CVPR_2023_paper.pdf'
            },
            {
              action: 'route',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://zzyfd.github.io/RCD-page/'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/jiangyitong/RCD?tab=readme-ov-file'
            }
          ]
        },
        {
          title: 'Learning image-adaptive codebooks for class-agnostic image restoration',
          authors: 'Kechun Liu, <strong>Yitong Jiang</strong>, Inchang Choi, Jinwei Gu',
          venue: 'ICCV 2023',
          date: '2023/10/01',
          background: '/pub-images/Learning Image-Adaptive.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'http://openaccess.thecvf.com/content/ICCV2023/papers/Liu_Learning_Image-Adaptive_Codebooks_for_Class-Agnostic_Image_Restoration_ICCV_2023_paper.pdf'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/kechunl/AdaCode'
            },
            {
              action: 'route',
              buttonName: 'Project Page',
              buttonIcon: 'fa-globe',
              link: 'https://kechunl.github.io/AdaCode/'
            }
          ]
        },
        {
          title: 'STAR: A structure-aware lightweight transformer for real-time image enhancement',
          authors: 'Zhaoyang Zhang, <strong>Yitong Jiang</strong>, Jun Jiang, Xiaogang Wang, Ping Luo, Jinwei Gu',
          venue: 'ICCV 2021',
          date: '2021/10/22',
          background: './pub-images/STAR.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://openaccess.thecvf.com/content/ICCV2021/papers/Zhang_STAR_A_Structure-Aware_Lightweight_Transformer_for_Real-Time_Image_Enhancement_ICCV_2021_paper.pdf'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/zzyfd/STAR-pytorch'
            }
          ]
        },
        {
          title: 'HDR video reconstruction with tri-exposure quad-bayer sensors',
          authors: '<strong>Yitong Jiang</strong>, Inchang Choi, Jun Jiang, Jinwei Gu',
          venue: 'ArXiv Preprint',
          date: '2021/3/19',
          background: './pub-images/HDR.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://arxiv.org/pdf/2103.10982'
            },
          ]
        },
        {
          title: 'Revisiting shadow detection: A new benchmark dataset for complex world',
          authors: 'Xiaowei Hu, Tianyu Wang, Chi-Wing Fu, <strong>Yitong Jiang</strong>, Qiong Wang, Pheng-Ann Heng',
          venue: 'TIP 2021',
          date: '2021/1/11',
          background: '/pub-images/Revisiting_Shadow_Detection.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9319520'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/xw-hu/FSDNet'
            }
          ]
        },
        {
          title: 'Mask-shadowgan: Learning to remove shadows from unpaired data',
          authors: 'Xiaowei Hu, <strong>Yitong Jiang</strong>, Chi-Wing Fu, Pheng-Ann Heng',
          venue: 'ICCV 2019',
          date: '2019/10/22',
          background: './pub-images/Mask-shadowgan.png',
          operations: [
            {
              action: 'link',
              buttonName: 'Paper',
              buttonIcon: 'fa-file',
              link: 'http://openaccess.thecvf.com/content_ICCV_2019/papers/Hu_Mask-ShadowGAN_Learning_to_Remove_Shadows_From_Unpaired_Data_ICCV_2019_paper.pdf'
            },
            {
              action: 'link',
              buttonName: 'Code',
              buttonIcon: 'fa-code',
              link: 'https://github.com/xw-hu/Mask-ShadowGAN'
            }
          ]
        }
      ]
    }
  },
  methods: {
    navTo(id) {
      // child = document.getElementById(id)
      // window.scrollTo(0, 0)
      // window.scrollTo(0, child.offsetTop - 60)
    },
    showMail() {
      this.$emit('showModal', 'Email Address',
        '<p style=\'text-align: center\'><i class=\'fa-3x fa fa-beat fa-envelope\'></i> </p><p style=\'text-align: center\'>ytjiang9#8o2iink.cuhk.edu.hk</p>'.replace('9#8o2i', '@l'))
    }
  }
}
</script>

<style scoped>
.avatar {
  /* background-position: bottom; */
  background-repeat: no-repea !important;
  background-size: cover !important;
  height: 150px;
  width: 150px;
}

/* Marquee title scrolling for long text */
/* .max-w-60vw {
  max-width: 60vw;
} */

.animate-infinite-scroll {
  display: inline-block;
  white-space: nowrap;
  will-change: transform;
  animation: marquee-scroll 14s linear infinite;
}

.animate-infinite-scroll span {
  display: inline-block;
  padding-right: 2rem;
  /* gap between repeats */
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>

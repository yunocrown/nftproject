import React from 'react'
import classes from "./Logo.module.css"


const Logo = () => {
  return (
    <div className={classes.logo_container}>
        <svg width="166" height="53" viewBox="0 0 166 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68.198 17.002C70.6687 17.002 72.7313 17.2967 74.386 17.886C76.0407 18.4753 77.3553 19.28 78.33 20.3C79.3273 21.2973 80.03 22.4533 80.438 23.768C80.8687 25.0827 81.084 26.4653 81.084 27.916C81.084 29.3667 80.846 30.7607 80.37 32.098C79.9167 33.4353 79.18 34.6253 78.16 35.668C77.1627 36.688 75.8367 37.504 74.182 38.116C72.55 38.7053 70.5553 39 68.198 39H55.618V17.002H68.198ZM60.14 35.124H68.096C69.728 35.124 71.0767 34.9313 72.142 34.546C73.23 34.138 74.0913 33.594 74.726 32.914C75.3607 32.234 75.814 31.4633 76.086 30.602C76.358 29.7407 76.494 28.8453 76.494 27.916C76.494 26.9867 76.358 26.1027 76.086 25.264C75.814 24.4253 75.3607 23.6773 74.726 23.02C74.0913 22.3627 73.23 21.8413 72.142 21.456C71.0767 21.0707 69.728 20.878 68.096 20.878H60.14V35.124ZM89.9888 14.69V18.566H84.8548V14.69H89.9888ZM85.1948 22.102H89.6148V39H85.1948V22.102ZM110.986 25.468L97.5565 36.96L97.0805 35.668H111.224V39H93.9185V35.668L107.348 24.176L107.824 25.468H93.9185V22.102H110.986V25.468ZM123.166 39.374C121.489 39.374 119.959 39.0113 118.576 38.286C117.216 37.538 116.128 36.5067 115.312 35.192C114.519 33.8547 114.122 32.3133 114.122 30.568C114.122 28.7773 114.53 27.2247 115.346 25.91C116.162 24.5953 117.262 23.5753 118.644 22.85C120.05 22.102 121.636 21.728 123.404 21.728C125.354 21.728 126.918 22.1247 128.096 22.918C129.298 23.6887 130.17 24.7427 130.714 26.08C131.258 27.4173 131.53 28.9133 131.53 30.568C131.53 31.5653 131.372 32.5853 131.054 33.628C130.737 34.648 130.25 35.6 129.592 36.484C128.935 37.3453 128.074 38.048 127.008 38.592C125.943 39.1133 124.662 39.374 123.166 39.374ZM124.594 35.974C125.932 35.974 127.088 35.7473 128.062 35.294C129.037 34.8407 129.785 34.206 130.306 33.39C130.828 32.574 131.088 31.6333 131.088 30.568C131.088 29.412 130.816 28.4373 130.272 27.644C129.751 26.828 129.003 26.216 128.028 25.808C127.076 25.3773 125.932 25.162 124.594 25.162C122.713 25.162 121.251 25.6607 120.208 26.658C119.166 27.6327 118.644 28.936 118.644 30.568C118.644 31.656 118.894 32.608 119.392 33.424C119.891 34.2173 120.582 34.8407 121.466 35.294C122.373 35.7473 123.416 35.974 124.594 35.974ZM131.088 22.102H135.508V39H131.394C131.394 39 131.36 38.7847 131.292 38.354C131.247 37.9007 131.202 37.334 131.156 36.654C131.111 35.974 131.088 35.3053 131.088 34.648V22.102ZM139.509 22.102H143.929V39H139.509V22.102ZM150.423 25.74C149.153 25.74 148.054 25.9893 147.125 26.488C146.195 26.964 145.447 27.5533 144.881 28.256C144.314 28.9587 143.917 29.6387 143.691 30.296L143.657 28.426C143.679 28.154 143.77 27.7573 143.929 27.236C144.087 26.692 144.325 26.114 144.643 25.502C144.96 24.8673 145.379 24.2667 145.901 23.7C146.422 23.1107 147.057 22.6347 147.805 22.272C148.553 21.9093 149.425 21.728 150.423 21.728V25.74ZM152.065 22.102H165.189V25.536H152.065V22.102ZM156.417 17.478H160.837V39H156.417V17.478Z" fill="white"/>
        <path d="M44.7187 37.9654H39.75C39.4727 37.9655 39.2002 37.8929 38.9597 37.7549C38.7192 37.6169 38.5192 37.4182 38.3794 37.1787L31.7544 25.8209C31.6199 25.5908 31.4389 25.3912 31.2229 25.235C31.0069 25.0788 30.7607 24.9693 30.5001 24.9136C30.2394 24.8579 29.9699 24.8571 29.709 24.9114C29.448 24.9657 29.2012 25.0738 28.9844 25.2288C28.5985 25.5233 28.3349 25.9497 28.2439 26.4265C28.153 26.9032 28.2412 27.3968 28.4916 27.8126L32.7937 35.1249C32.9611 35.4139 33.049 35.7421 33.0485 36.076C33.048 36.41 32.9591 36.7379 32.7909 37.0264C32.6227 37.3149 32.3811 37.5537 32.0907 37.7186C31.8003 37.8836 31.4714 37.9687 31.1375 37.9654H15.4031C14.9183 37.9576 14.4477 38.1291 14.0817 38.447C13.7156 38.7649 13.4799 39.2068 13.4197 39.6879C13.3937 39.9536 13.4236 40.2218 13.5075 40.4753C13.5914 40.7288 13.7275 40.9619 13.9069 41.1596C14.0863 41.3574 14.3051 41.5153 14.5492 41.6234C14.7934 41.7315 15.0574 41.7873 15.3244 41.7872H44.7891C45.0558 41.7867 45.3194 41.7305 45.563 41.6222C45.8067 41.5138 46.025 41.3558 46.2039 41.1581C46.3829 40.9604 46.5185 40.7275 46.6022 40.4743C46.6858 40.2211 46.7156 39.9533 46.6897 39.6879C46.6297 39.2089 46.3958 38.7688 46.0324 38.4511C45.6689 38.1335 45.2014 37.9606 44.7187 37.9654Z" fill="white"/>
        <path d="M27.4854 15.0926L20.9888 26.4296C20.7457 26.8431 20.6624 27.3313 20.7547 27.802C20.847 28.2727 21.1085 28.6933 21.4898 28.9844C21.7074 29.1405 21.9553 29.2492 22.2175 29.3037C22.4797 29.3581 22.7504 29.357 23.0121 29.3004C23.2739 29.2439 23.5209 29.1331 23.7372 28.9753C23.9535 28.8174 24.1344 28.616 24.2681 28.384L28.5123 20.9723C28.6782 20.6842 28.9172 20.4449 29.205 20.2785C29.4929 20.1121 29.8195 20.0245 30.152 20.0245C30.4844 20.0245 30.8111 20.1121 31.0989 20.2785C31.3868 20.4449 31.6257 20.6842 31.7917 20.9723L39.7003 34.6695C39.8684 34.9599 40.1099 35.2011 40.4006 35.369C40.6912 35.5368 41.0209 35.6254 41.3565 35.6259C41.6917 35.6254 42.0208 35.5369 42.311 35.3692C42.6011 35.2015 42.8422 34.9605 43.0099 34.6703C43.1776 34.3801 43.2662 34.051 43.2667 33.7158C43.2672 33.3807 43.1796 33.0513 43.0128 32.7606L28.2763 7.24609C28.143 7.01466 27.9627 6.81376 27.7469 6.65638C27.5312 6.49901 27.2848 6.38865 27.0237 6.33246C26.7626 6.27626 26.4927 6.27547 26.2313 6.33014C25.9699 6.38481 25.7229 6.49373 25.5062 6.64984C25.1195 6.94167 24.8547 7.36644 24.7629 7.84211C24.6712 8.31778 24.7589 8.81058 25.0093 9.22531L27.4937 13.5109C27.6309 13.7522 27.7023 14.0253 27.7008 14.3028C27.6994 14.5804 27.6251 14.8527 27.4854 15.0926Z" fill="white"/>
        <path d="M26.8726 35.6715C27.1773 35.6695 27.4771 35.5949 27.747 35.4537C28.017 35.3125 28.2493 35.1089 28.4247 34.8598C28.6001 34.6107 28.7134 34.3233 28.7553 34.0216C28.7972 33.7198 28.7664 33.4124 28.6655 33.125C28.5325 32.7559 28.2873 32.4376 27.9643 32.2149C27.6413 31.9921 27.2567 31.876 26.8644 31.8828H18.314C17.9801 31.887 17.6512 31.8026 17.3606 31.6382C17.07 31.4737 16.8283 31.2352 16.6599 30.9469C16.4916 30.6586 16.4027 30.3309 16.4023 29.997C16.4019 29.6632 16.49 29.3352 16.6577 29.0465L24.5663 15.3452C24.8194 14.9059 24.8877 14.3841 24.7561 13.8945C24.6245 13.4049 24.3037 12.9876 23.8645 12.7345C23.4252 12.4814 22.9034 12.4131 22.4138 12.5447C21.9242 12.6763 21.5069 12.9971 21.2538 13.4363L6.54218 38.955C6.41684 39.1725 6.33557 39.4126 6.30301 39.6615C6.27045 39.9104 6.28724 40.1633 6.35241 40.4057C6.41758 40.6481 6.52986 40.8753 6.68284 41.0743C6.83583 41.2734 7.02651 41.4403 7.24401 41.5657C7.46152 41.691 7.70157 41.7723 7.95048 41.8048C8.19939 41.8374 8.45228 41.8206 8.6947 41.7554C8.93712 41.6903 9.16434 41.578 9.36336 41.425C9.56239 41.272 9.72934 41.0813 9.85468 40.8638L12.3722 36.5079C12.5104 36.2677 12.7095 36.0681 12.9493 35.9292C13.1892 35.7904 13.4614 35.7172 13.7386 35.717L26.8726 35.6715Z" fill="white"/>
        </svg>
    </div>
  )
}

export default Logo
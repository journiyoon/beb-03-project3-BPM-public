import { useRef, useEffect, useCallback, UIEvent } from "react";
import { Box, Container, useScrollTrigger, Grow } from "@mui/material";
import { motion, useViewportScroll } from "framer-motion";
import practiceSvg from "../asset/Frame 2.svg";
import { Theme } from "@mui/material/styles";

export default function Home() {
  // interface UseScrollTriggerOptions {
  //   disableHysteresis?: boolean;
  //   target?: Node | Window;
  //   threshold?: number;
  // }

  /** 
   * 우선 첫번째로 scrollY 값을 구할 수 있어야되고
   * strokeDashoffset이 react에서도 사용할 수 있는지 확인해야됨
   * function calcDashoffset(scrollY, element, length) { scrollY는 구해야되고
   * element = ref.current
   * length = offsetHeight
  //   const ratio = (scrollY - element.offsetTop) / element.offsetHeight
  //   const value = length - (length * ratio)
  //   return value < 0 ? 0 : value > length ? length : value
  // }

  // function scrollHandler() {
  //   const scrollY = window.scrollY + (window.innerHeight * 0.8) innerHeight = vh
  //   path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
  //   path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
  //   path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)
  // }

  // window.addEventListener('scroll', scrollHandler) */

  // scroll에 따라 dash offset 의 값이 바뀌어야됨! 0 ~ img height까지@
  // calc dash offset은 스크롤 길이에 따라 바꿔주려고 하는거
  // innerHeignt = vh
  // scrollY 는 전체 화면에서 얼마나 스크롤이 내려왔는지
  const { scrollYProgress } = useViewportScroll();

  // scroll Top
  const ref = useRef();
  const scrollTrigger = useScrollTrigger();
  // const handleScroll = useCallback((): void => {
  // // 내용 구현
  // }, [])
  const handleScroll = (event: UIEvent<HTMLDivElement>) => {};
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <>
      <Container
        sx={{
          height: "2500px",
          bgcolor: "black",
          fontFamily: "Nanum Gothic",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box>Hello Home!</Box>
        {/* 
        <Grow
          className="path1"
          ref={ref}
          mountOnEnter
          in={scrollTrigger}
          // timeout={1000}
          onScroll={handleScroll}
        >
          <img src={practiceSvg} stroke-dashoffset="50px" />
        </Grow> */}

        <svg
          version="1.1"
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 4019.1 3610.2"
        >
          <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,3610.2267)">
            <g id="g12" transform="scale(0.1)">
              <g id="g14" transform="scale(1.67648)">
                <motion.path
                  id="path16"
                  d="M16237.7,5730.5c-371.9-81.5-735.6-198-1086.1-349.7c-167.1-72.3-339.9-146.6-493.4-246.8
				c-133.9-87.5-225.8-201.3-284-353.1c-61.5-160.5-97.8-363.5-257.4-455.8c-155-89.6-278.2,33.3-350.8,165.3
				c-67.4,122.5-112.3,257-197,369c-91.2,120.6-213.7,214-351.2,271.3c-277.8,115.7-592.5,60.2-824.4-132.6
				c-53.4-44.5-101.1-95.5-142.4-152.1c-49.5-68-74.5-158.7-129.3-221.1c-71-80.7-185.6-20-242.2,47.8
				c-42.7,51.2-67.1,116.2-73.7,182.9c-27.4,275.2,202.2,537.7,476.8,484.4c321.5-62.5,504.6-425.7,403-735
				c-113.4-345.2-496.8-512.1-817.3-356c-279.3,136.1-372.5,458-348.2,754.4c27.9,339.8,199.5,626.9,390.2,896.3
				c104,146.8,213.2,289.8,311.1,441c90.7,140.1,199.6,304.6,223.1,474.7c17.7,127.3-46.7,273.7-183.6,291.1
				c-150.3,19.1-217.6-164.2-260.2-280.6c-121.9-333.2-92.4-706.1-18.8-1047c143.9-666.9,524.1-1465.5,98.5-2108.2
				c-197-297.5-550.6-405.6-878.8-465.8c-288-52.9-585.2-58.7-875.4-20.6c-562.6,73.9-1118.3,321.9-1502.4,760
				c-96.8,110.4-179.7,231.7-250.2,361.4c-13.5,25-51.9,31.9-71,9.4c-6.9-8.1-13.8-16.2-20.8-24.2c25.8-11,51.5-22,77.3-32.9
				c-69.4,1676.6-139.6,3353.7-151.3,5032c-5.8,833.2,2.7,1666.6,32.9,2499.2c15.3,421.3,36.2,842.4,63.4,1263.1
				c13.5,207.9,29.5,415.6,45.3,623.3c10.4,137.3,12.5,277.1-14.7,412.6c-50.3,250.8-256.1,460.4-519.4,367.7
				c-309.2-108.7-399.5-448.4-373.3-751.9c16.6-192.2,59.8-382.2,94.8-571.4c36.8-198.5,89.4-401.2,100.4-603
				c20.6-378.9,37.6-758,49.3-1137.3c29.3-943.7,50.9-1908.4-80.2-2846c-17.3-123.8-38-247.2-64.7-369.3
				c-24.4-112.1-58.7-221.5-80.1-334.2c-57.3-301.8-76.4-612.9-70.7-919.9c6.1-331.8,60.7-669.7,234.5-955.5
				c62-101.9,156.6-180.3,204.5-288.2c22.5-50.5,85.4-17.5,90.4,25.2c25.1,210.1,29.7,422.1,11,633.1c-8.9,100.1-22.4,200-41,298.7
				c-14,74-30.5,152.8-86.9,206c-110.5,104.2-274,26-363.9-66.5c-89.2-91.7-146.7-218.1-172.9-343.9
				c-51.8-249.3,5.7-529.7,175.3-720.1c188.8-211.8,486.2-245.6,733.3-127.5c261.2,124.8,426.4,401.6,394.8,698.7
				c-30.8,290.4-225,560.4-497.7,653.9c-147.6,50.6-322.5,49.9-458.3-35.3c-135.8-85.1-210.8-236.8-255.2-388.7
				c-83.9-286.4-84.8-595.8-21.2-886.5c142.9-654.3,617.1-1231.8,1246.8-1430.7c4.3,32.6,8.6,65.3,12.9,98
				c-605.1-51.2-1213.6-37-1815.8,42.4c15.6-12.2,31.1-24.4,46.8-36.6c-68.4,236,4.1,442.4,200.7,577.2
				c167.2,114.6,366.7,197.3,555.8,266.4c411,150.2,849.8,165.7,1278.9,99.9c208.8-32.1,415.9-91.3,600-200
				c161.7-95.5,297.1-230,408.8-382.7c129.4-177.1,206.6-386.5,183.2-610.3c-29.4-283.6-169.8-543.6-324.7-774.6
				c-585-872.1-1630.3-1455.6-2667.2-1146.1c-475.9,142-873.4,479.9-1115,922.9c-256.5,470.3-312.3,1031.1-179.5,1550.6
				c67.9,266,187.8,502.5,330.3,733.4c129.1,209.1,271.6,424.3,324.1,670c24.4,114.4,27,232.2,2.1,346.7
				c-29.9,138-95.3,264.7-124.6,403.1c-49.8,235.1-17.6,490.8,90.5,704.3c217,428.4,772.9,624.2,1183.1,357.5
				c325-211.3,464.2-696.1,860.6-798.8c245.6-63.7,449.1,98.4,684.5,126.6c115.1,13.8,249.8-9.4,306.1-127.3
				c52.3-109.5,18.4-246.6-29.8-351c-99.7-215.5-291.2-380.7-305.8-633c-10.4-178.2,74-343.9,167.7-487.5
				c101-154.7,224.5-297.5,301.9-467.3c95.6-209.7,44.6-404-110.8-567.7c-200.2-210.8-435.4-393-652.4-585
				c-210.2-185.9-417.8-377-646.5-538.8c-230.5-163-478.5-283.9-752.5-345.5c-295.3-66.3-601-80.3-902-97.9
				c-611.2-35.7-1223.5-44.6-1835.6-50.8c-889.4-9-1778.2,35.4-2667.5,1.9c-287.3-10.8-573.8-29.9-860.7-48.8
				c-44-2.9-44.3-73.7,0-70.7c1026.2,67.3,2053.8,25.4,3080.8,16.6c588.1-5,1177.6,5.7,1765.3,27.3c326.6,12,653.8,27.6,979.4,57.4
				c291.5,26.7,582.1,74.4,851.7,196.4c256,115.8,483.3,287.3,698.4,469c240.3,202.8,473.1,415.2,708.8,623.7
				c185.4,164,440.9,338.6,485.9,605.6c31.3,185.1-46.6,358.2-143.3,509.5c-106.2,166.4-240.6,317.5-321,500.2
				c-40.8,92.8-62.9,195.5-45.7,297c23,134.8,106.5,249.2,180.3,359.3c119.5,178.2,253.6,435.5,127.3,648.1
				c-128,215.2-401,174.4-597.3,104.3c-129.7-46.3-264-106.2-404.4-83.6c-101,16.3-189.9,71.1-265.4,140.1
				c-161.9,147.7-276.1,341.2-426.5,500.1C7849.3,7913,7654.4,8015,7429,8033.8c-232.5,19.5-473-51.3-657.9-197.7
				c-182.5-144.4-306.1-359.7-358.3-589c-59-259-21.2-502.8,66.9-748.8c50.6-141.3,83.1-280.5,57.3-431.4
				c-23-134.6-78.1-260.2-141.9-379.1c-133.7-249-302.7-474.9-411.9-737.8c-210.8-507.7-245-1097-63.2-1619.5
				c166.6-478.7,500.5-897.3,938.1-1138.5c475.5-262.2,1047.7-306.3,1566.4-168.8c510.2,135.3,964.9,448.7,1317,847.4
				c178,201.4,339.1,427.3,457.8,671.1c115.7,237.6,195.8,513.7,137.9,779.5c-85.8,394.2-429.8,733.1-779.9,886.3
				c-195.1,85.4-403.5,128.1-613.7,150.1c-226.2,23.7-455.9,33.4-682,4.4c-226.8-29.2-445.3-93.9-656-184.1
				c-189.3-81-397.4-163.5-545.7-313.8c-155.1-157.4-185.9-381.4-125-591.3c6.7-23.4,24.8-33.7,46.8-36.6
				c602.2-79.5,1210.6-93.6,1815.8-42.4c53.3,4.5,67.3,80.8,12.9,98c-472.8,149.4-849.3,525.4-1054.9,982.8
				c-104.1,231.6-163,486.5-165.6,741.9c-2.6,245.6,32.7,583.1,220.3,758c225.8,210.4,578.9,56.3,735.6-165.1
				c147.6-208.6,182.9-498.5,38.1-718.5c-138.9-211.2-416.8-330.7-657.5-252.6c-211.2,68.5-339.3,279.5-372.5,495.7
				c-18.9,122.4-8.2,250.6,32.9,367.2c41.7,118.3,139.8,282.2,277.1,290.8c100.3,6.3,118.3-103.7,133.1-182
				c18.8-99.4,32-200,40-300.9c15.9-201.5,10.5-403.8-13.4-604.4c30.2,8.4,60.3,16.8,90.4,25.2c-48.8,109.7-141.9,185.1-204.6,288.2
				c-84.8,139.3-140.4,294.6-175.2,454.5c-72.6,333.2-56.7,693.4-22.9,1031c28.4,283,111,549.1,159.3,827.6
				c137.5,793.1,136.7,1614.4,125.8,2417c-4.4,323.5-13.7,646.9-26.4,970.1c-14.7,373.2-15.1,752.2-83.1,1119.5
				c-36,194.3-72.1,388.5-107.8,582.9c-33.9,184.4-69.7,377.4-33.9,564.5c30.2,157.9,123.1,300.6,269.3,367.1
				c134.5,61.1,284.5,18,363.9-109.8c70.1-112.9,83.3-256.6,84.3-387.2c1.4-171.3-20.3-343.2-32.6-513.9
				c-28.8-400.2-51.5-800.9-68.9-1201.8c-35.1-807-49-1614.8-48.1-2422.5c1.7-1617.3,62-3233.8,130.1-4849.3
				c8.6-203.2,17.2-406.4,25.9-609.5c1.6-37.6,50-64.9,77.3-32.9c6.9,8.1,13.8,16.2,20.8,24.3c-23.7,3.1-47.4,6.3-71.1,9.4
				c296.2-543.8,818.5-907.1,1394.5-1075c295.5-86.1,605.6-123.2,912.5-112.1c311.7,11.2,637.7,65.4,924.5,195.4
				c313.5,142.3,516.3,417.4,592.8,758c82.2,366.2,19,738-74.6,1095c-103.6,395.4-241.9,788-240.9,1202.7
				c0.4,201.5,34.3,406.4,124.9,586.8c19.2,38.1,43.7,93,87.2,107.7c52.2,17.7,107.5-27.5,130.3-72.3
				c50.7-99.9-13.2-226.5-57.5-316.1c-302.8-611.9-944.2-1106-846.3-1864.8c38.1-295.6,218.4-556.1,507.6-634
				c312.4-84.2,640.8,68.2,779.4,369.8c132.6,288.5,53.6,622.5-197.5,812.2c-222.1,167.9-528.5,153.5-697.8-82.1
				c-135.6-188.9-161.1-492,30.4-653.3c121.4-102.2,275-89.1,353.1,55.3c85.4,157.8,173,288.3,329.6,380.3
				c317.8,186.8,724.6,102.8,954.8-189.1c149.1-189,210.6-613.5,513.7-604.7c147.1,4.3,260.9,129.5,322.5,256.5
				c80.6,166.4,100.7,360,233.5,496.6c137.3,141.3,339.5,221.6,514.1,301.2c190.5,86.8,385.6,162.9,583.9,228.5
				c192.6,63.6,388.2,116.7,586,160.3C16300,5671.1,16281.4,5740.1,16237.7,5730.5L16237.7,5730.5"
                  // fill="#fff"
                  strokeWidth="25"
                  stroke="rgba(255, 255, 255, 1)"
                  strokeLinecap="round"
                  pathLength={scrollYProgress}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  // transition={transition}
                />
              </g>
            </g>
          </g>
        </svg>

        {/* <svg
          viewBox="0 0 7487 2503"
          // viewBox="0 0 694 448" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="m2099 887c337-53 685-46 1041 6 113 174 175 397 175 629 0 524-312 949-698 949-385 0-698-425-698-949 0-235 64-461 179-635z"
            fill="transparent"
            strokeWidth="5"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="m25 1442c961-2660 4467-823 6197-459 46 0 1239 367 1239 138"
            fill="transparent"
            strokeWidth="5"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="m5533 1534c-1102-1102-4177-1193-5141 230 275 0 780 138 964 321 621 621 3977 548 4177-551z"
            fill="transparent"
            strokeWidth="5"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="m409 1768c1061-1028 2253-1297 5075-233"
            fill="transparent"
            strokeWidth="5"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          <motion.path
            d="m1110 1231c-63 193-67 581 17 706"
            fill="transparent"
            strokeWidth="5"
            stroke="rgba(255, 255, 255, 1)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
        </svg> */}

        {/* <Box component='svg' 
            sx={{
              fill: (theme: Theme) => theme.palette.common.white,
              stroke: (theme) => theme.palette.divider,
              strokeWidth: 1,
            }}
            points='0,100 50,00, 100,100'
          />
        </Box> */}
      </Container>
    </>
  );
}

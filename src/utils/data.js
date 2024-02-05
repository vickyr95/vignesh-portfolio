import binPicking from '../assets/project-images/bin-picking.jpg';
import windowCleaning from '../assets/project-images/skyscrapper.png';
import football from '../assets/project-images/football.png';
import ADAS from '../assets/project-images/car.png';
import agriMobile from '../assets/project-images/agriMobile.jpg';
import golfBallLocation from '../assets/project-images/golf.png';

import ROS2 from '../assets/service-images/ROS2.png';
import AIDeepLearning from '../assets/service-images/Town-Centre-video-sample-frame-Right-Yolact-result-Left-Mask-R-CNN-result_Q320.jpg';
import computerVS from '../assets/service-images/gramener-computer-vision-solutions.webp';
// import AIproductLCM from '../assets/service-images/ai-life-cycle.png';
import EHSFD from '../assets/service-images/640652c3ecec070a76f32338_embedded-systems.webp';
import apps from '../assets/service-images/ios&android.png';
import drone from '../assets/service-images/drone.png';
import SIC from '../assets/service-images/AdobeStock_221128268-scaled.jpeg';
import consult from '../assets/service-images/consulting.png';
import code from '../assets/service-images/code.png';
import industrialRobotics from '../assets/service-images/industrial-robotics.png';

export const projectsData = [
  {
    title: 'Bin picking robot simulation',
    image: binPicking,
    description:
      'Bin-picking robot system utilizing ROS, MoveIt, OpenCV, and AI, with a focus on controlling a 6-axis industrial robot. Integrated camera-based object detection using OpenCV to identify and pick trained products, ensuring precise placement in predefined locations.',
    docs: 'https://docs.google.com/document/d/1G5mx9NGHI0q1_HaEufhLjMeiSdaIBdYM20N_q2O_Zu4/edit?usp=sharing',
  },
  {
    title: 'Skyscraper Window cleaning robot',
    image: windowCleaning,
    description:
      " Prototype for a groundbreaking Spider Cam skyscraping project, leading project planning, hardware selection, and Python coding for efficient motor control. Meticulously considering technical specifications, I ensured the seamless integration of hardware components, optimizing the Spider Cam's motor operations for a responsive and technically sophisticated proof-of-concept.",
    docs: 'https://docs.google.com/document/d/1_R2WbqismUYmMf8ZXnshWGqgajKw3-vv_r8YrdZSi3c/edit?usp=sharing',
  },
  {
    title: 'Foot ball video automation',
    image: football,
    description:
      'Dedicated one year to a part-time project utilizing OpenCV, AI, and a four-camera stereo setup for football player and ball detection. Achieved nuanced analysis of player movements and ball speed, employing MOG, Darknet, and YOLO v3 for custom-trained detection, paving the way for personalized player strategies and skill enhancement.',
    docs: 'https://docs.google.com/document/d/1SuyIXrSxxJrPCXlM9-UkNceJ6hnSyK3HCHM_Msdl5bQ/edit?usp=sharing',
  },
  {
    title: 'Mobile robot',
    image: agriMobile,
    description:
      'As the lead for an extensive Agricultural Mobile Robot project, I played a pivotal role across departments, encompassing hardware selection, robot design, coding for control systems, and AI integration. Currently in the production stage, the semi-autonomous robot employs advanced AI techniques such as object detection, segmentation, and Lanenet for lane detection. Running on Jetson edge devices for efficient inference, the robot is equipped with a customized STM32-based processor for precise control, enabling automated tasks like deweeding and cultivation in agricultural fields.',
    docs: 'https://docs.google.com/document/d/1cG85otjLuEFobUk7umrOviuwhh5ggVEo8K-AV8MN-dQ/edit?usp=sharing',
  },
  {
    title: 'ADAS - BEVfusion ',
    image: ADAS,
    description:
      'Led the development of a comprehensive simulation for an Advanced Driver Assistance System (ADAS) utilizing lidar and camera data in Autoware. Achievements include the implementation of real-time map integration, lane detection, car speed assessment, detection of various vehicle types, tracking of other vehicle speeds, and human detection. The simulation transitioned from ROS2 and RVIZ to Autoware to align with client specifications, ultimately realizing the goal of creating a fully autonomous car in a simulated environment.',
    docs: 'https://docs.google.com/document/d/1lu8SxJW54AsNGmisKy9Y_Sbb7XFehvBvKMh23QD5C3c/edit?usp=sharing',
  },
  {
    title: 'Golf ball detection',
    image: golfBallLocation,
    description:
      'Designed an immersive golf simulation where real-time ball parameters like speed and direction were monitored, creating an authentic on-screen experience. Utilizing OpenCV for ball detection and speed calculation, the project integrated a custom handheld device (ESP32 IMU-based) worn by the player to transmit hitting times. This setup provided accurate feedback, replicating the dynamics of a golf game for a comprehensive and engaging experience.',
    docs: 'https://docs.google.com/document/d/1Fs4Q088702WKSWxqk_I64KNVnjbhc-XCtmeiWr8KhjE/edit?usp=sharing',
  },
];

export const servicesData = [
  {
    id: 1,
    service: 'ROS1 and ROS2 real-time and simultion expertise',
    icon: ROS2,
  },
  {
    id: 2,
    service: 'Android and iOS app development',
    icon: apps,
  },
  {
    id: 3,
    service: 'Industrial robotics programming',
    icon: industrialRobotics,
  },
  {
    id: 4,
    service: 'Drone programming and control',
    icon: drone,
  },
  {
    id: 5,
    service: 'Computer vision solutions',
    icon: computerVS,
  },
  {
    id: 6,
    service: 'Robotic and automation solution consultation',
    icon: consult,
  },
  {
    id: 7,
    service: 'Programming in Python, C++ and C',
    icon: code,
  },

  {
    id: 8,
    service:
      'Sensor integration and control (lidar, radar, vision-based sensors)',
    icon: SIC,
  },

  {
    id: 9,
    service: 'Embedded hardware solution and firmware development',
    icon: EHSFD,
  },
  {
    id: 10,
    service:
      'AI Deep Learning models (YOLO, YOLACt, MIDAS, Mask RCNN) in real world application',
    icon: AIDeepLearning,
  },
  // {
  //   id: ,
  //   service: 'AI product lifecycle management',
  //   icon: AIproductLCM,
  // },
];

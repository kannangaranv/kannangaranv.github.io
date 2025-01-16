import Work1 from '../../src/assets/Enfluent.jpg';
import Work2 from '../../src/assets/kaiju.jpg';
import Work3 from '../../src/assets/zoo.jpeg';
import Work4 from '../../src/assets/flower.jpg';
import Work5 from '../../src/assets/brain.png';
import Work6 from '../../src/assets/covid.jpg';
import Work7 from '../../src/assets/volt.jpg';
import Work8 from '../../src/assets/equilizer.jpg';
import Work9 from '../../src/assets/time.jpg';

export const projectsData = [
	{
		id: 1,
		image: Work1,
		title: 'Enfluent',
		category: 'Software',
		sourceUrl: 'https://github.com/kannangaranv/EnFluent-Personalized-Language-Learning-through-Adaptive-Learning-Management-Systems',
		status: 'development',
		description: 'The Enfluent project aims to revolutionize personalized language learning for IELTS students by integrating features such as an automated grading system of reading, writing, listening and speaking according to IELTS criteria. interactive avatars, engagement detection using IoT data.',
		tools: ['Java Spring Boot', 'Python FastAPI', 'PostgreSQL', 'ReactJS','Git'],
	},
	{
		id: 2,
		image: Work2,
		title: 'Kaiju Wallet',
		category: 'Software',
		sourceUrl: 'https://www.kaiju3d.com/',
		description:"Developed a multi-blockchain SaaS wallet application designed for seamless wallet creation and secure transaction signing. Leveraged Python and Node.js for robust backend functionality while contributing to the architectural design with a focus on scalability and security. Deployed and managed the application on AWS cloud infrastructure, ensuring high availability. Conducted comprehensive load testing and performance optimization to enhance efficiency and reliability.",
		tools: ['AWS', 'Node.js', 'Python', 'Docker', 'MongoDB', 'GitLab'],
		status: 'completed',
	},
	{
		id: 3,
		image: Work3,
		title: 'Power Zoo Game',
		category: 'Software',
		sourceUrl: 'https://github.com/kannangaranv/PowerZoo-Game-Developed-using-Unity',
		description:'Power Zoo is an educational game designed to immerse players in a virtual zoo environment while promoting energy conservation through interactive gameplay and quizzes. Developed with a frontend in React.js and a backend powered by Java Spring Boot and MongoDB, the game engages users with visually compelling Unity-based simulations. Players explore diverse habitats, interact with virtual animals, and participate in challenges that educate them about sustainable practices and energy-saving strategies. By dynamically adjusting difficulty levels and emphasizing species conservation alongside energy efficiency, Power Zoo aims to foster environmental awareness and encourage proactive energy conservation behaviors among players.',
		tools: ['Unity', 'React.js', 'Java Spring Boot', 'MongoDB','Git'],
		status: 'completed',
	},
	{
		id: 4,
		image: Work4,
		title: 'Flower Exchange App',
		category: 'Software',
		sourceUrl: 'https://github.com/kannangaranv/LSEG-Project',
		description:'This app facilitates the exchange of five varieties of flowers through a robust C++ platform, leveraging multithreading for enhanced efficiency.',
		tools: ['C++'],
		status: 'completed',
	},
	{
		id: 5,
		image: Work5,
		title: 'Brain Tumor Segmentation',
		category: 'Machine Learning',
		sourceUrl: 'https://github.com/kannangaranv/Brain_Tumor_Segmentation_using_Deep_Learning',
		description:"Developed a machine learning model to detect and segment brain tumors from medical images, automating the labeling process for tumor types. Implemented using Python, leveraging libraries like TensorFlow to achieve accurate and efficient tumor analysis. The project focused on improving diagnostic support for medical professionals through advanced image processing and classification techniques.",
		tools: ['Python', 'TensorFlow', 'Keras'],
		status: 'completed',
	},
	{
		id: 6,
		image: Work6,
		title: 'Covid Detector',
		category: 'Machine Learning',
		sourceUrl: 'https://github.com/kannangaranv/Covid-Detector-Model-using-CNN',
		description:'Developed a deep learning model to detect COVID-19 from chest X-ray images, enhancing diagnostic accuracy and efficiency. Leveraged Python and TensorFlow to build a convolutional neural network (CNN)',
		tools: ['Python', 'TensorFlow', 'Keras'],
		status: 'completed',
	},
	{
		id: 7,
		image: Work7,
		title: 'Digital Volt-Amp Meter',	
		category: 'Electronic',
		description:"The Digital Volt Amp Meter is designed to provide precise measurements of electrical parameters. It is a versatile tool suitable for various applications, including electronics testing, power supply monitoring, and more.",
		tools: ["Altium Designer", "SolidWorks"],
		sourceUrl: 'https://github.com/kannangaranv/Digital-Volt-Amp-meter/tree/main',
		status: 'development',
	},
	{
		id: 8,
		image: Work8,
		title: 'Five Band Audio Equalizer',
		category: 'Electronic',
		description:"An equalizer has the ability to adjust the output of different frequency bands within an audio signal. These circuits are widely used in hi-fi systems to achieve superior audio quality throughout all frequency bands. In this challenge, you are tasked to create a 5 band audio equalizer using analog electronic knowledge. After separating the frequency band, the device should be capable of applying a custom gain for each frequency band. The outputs of the 5 bands should be displayed individually using a sound level indicator",
		tools: ["Altium Designer", "SolidWorks"],
		sourceUrl: 'https://github.com/kannangaranv/Five-Band-Audio-Equalizer',
		status: 'completed',
	},
	{
		id: 9,
		image: Work9,
		title: 'Smart Time Stamp Recorder',
		category: 'Electronic',
		description:"The Smart Time Stamp Recorder is a versatile device designed to accurately record and display time-stamped data.",
		tools: ["Altium Designer", "SolidWorks","Arduino"],
		sourceUrl: 'https://github.com/kannangaranv/Smart-Time-Stamp-Recorder',
		status: 'completed',
	},
];

export const projectsNav = [
	{
		name: 'all',
	},
	{
		name: 'Software',
	},
	{
		name: 'Electronic',
	},
	{
		name: 'Machine Learning',
	},
];

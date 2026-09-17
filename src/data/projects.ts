import { Project } from '../types';

export const initialProjects: Project[] = [
  {
    id: 'omnicross',
    name: 'OmniCross',
    tagline: 'Cross-platform intelligent synchronization & communication utility',
    category: 'Full-Stack Systems',
    tier: 1,
    status: 'Featured',
    year: '2026',
    stack: ['React', 'Node.js', 'Express', 'WebSocket', 'Tailwind CSS'],
    description: 'A robust multi-environment communication bridge designed for seamless cross-device message and state relaying with minimal network overhead.',
    overview: 'OmniCross is engineered to bridge disparate client environments into a unified real-time data stream, enabling synchronized state updates across browser and desktop endpoints.',
    problem: 'Standard HTTP polling introduces unacceptable latency and connection churn when attempting to mirror active session states across heterogeneous devices.',
    engineering: 'Built using event-driven WebSockets backed by an optimized Node.js broker. Employs connection heartbeat monitoring, automatic exponential backoff reconnection strategies, and secure JWT-based handshake verification.',
    architectureDetails: 'Client (React SPA) <---> WebSocket Event Gateway <---> Redis/In-Memory Session Registry <---> Persistent State Log',
    keyFeatures: [
      'Real-time bi-directional event dispatching with sub-50ms roundtrip latency',
      'Fault-tolerant reconnection protocol with automatic state reconciliation',
      'Configurable channel isolation with JWT authorization barriers',
      'Low-overhead event serialization pipeline'
    ],
    challenges: [
      'Handling sudden client disconnections during active payload transfers without dropping unsynchronized buffer frames.',
      'Optimizing memory allocation in the Node.js event loop under concurrent connection spikes.'
    ],
    liveUrl: 'https://omni-cross-tyz9.vercel.app/',
    githubUrl: 'https://github.com/Koustav-Source',
    caseStudyUrl: '#omnicross'
  },
  {
    id: 'mineguard',
    name: 'MineGuard',
    tagline: 'Subterranean safety & environmental telemetry monitoring system',
    category: 'Backend & IoT Systems',
    tier: 1,
    status: 'Active',
    year: '2026',
    stack: ['Java', 'Spring Boot', 'MQTT', 'PostgreSQL', 'Docker'],
    description: 'An enterprise-grade telemetry ingestion engine designed to process continuous gas concentration and structural integrity sensor feeds from mining zones.',
    overview: 'MineGuard ingests high-frequency sensor streams from subterranean monitors, providing immediate threshold breach alerts and persistent logging for safety compliance.',
    problem: 'Subsurface operations often experience intermittent network partitions, leading to delayed hazard detection and lost telemetry data streams.',
    engineering: 'Engineered a resilient Spring Boot backend service communicating over lightweight MQTT protocols. Implemented local buffering queues to survive network blackouts and bulk database flush routines upon reconnection.',
    architectureDetails: 'Sensor Nodes ---> MQTT Broker ---> Spring Boot Ingestion Service ---> Connection Buffer Queue ---> PostgreSQL Relational Store',
    keyFeatures: [
      'Asynchronous MQTT packet parsing and validation pipeline',
      'Configurable threshold trigger engine for immediate safety alerts',
      'Robust offline buffering mechanism to prevent data loss during network dropouts',
      'Containerized deployment configuration via Docker for isolated execution'
    ],
    challenges: [
      'Maintaining reliable packet ordering when multiple underground relay stations retransmit buffered batches simultaneously.',
      'Optimizing PostgreSQL indexing for high-frequency time-series telemetry range queries.'
    ],
    githubUrl: 'https://github.com/Koustav-Source'
  },
  {
    id: 'railflow',
    name: 'RailFlow',
    tagline: 'Automated railway scheduling & transit resource allocation engine',
    category: 'Algorithms & Transit Systems',
    tier: 1,
    status: 'Prototype',
    year: '2026',
    stack: ['Java', 'Data Structures & Algorithms', 'Spring Boot', 'REST API'],
    description: 'A graph-based transit routing and platform allocation engine designed to optimize train scheduling conflicts and minimize bottleneck delays.',
    overview: 'RailFlow models railway networks as weighted directed graphs to compute collision-free routing paths and dynamic platform assignment schedules.',
    problem: 'Manual timetable adjustments in dense transit hubs frequently lead to platform deadlocks and cascade scheduling conflicts.',
    engineering: 'Implemented custom graph traversal algorithms (optimized Dijkstra and priority-queue interval scheduling) in core Java with strict thread-safe data structures.',
    architectureDetails: 'Transit Network Graph Model ---> Priority Interval Scheduler ---> Conflict Resolution Engine ---> REST Controller Layer',
    keyFeatures: [
      'Graph-based track topology representation with dynamic weight assignment',
      'Conflict detection algorithm for overlapping platform reservations',
      'RESTful interface for querying optimal transit paths and schedule windows',
      'Comprehensive unit test suite verifying edge cases in deadlock avoidance'
    ],
    challenges: [
      'Scaling graph search performance when evaluating multi-node terminal bottlenecks with hundreds of active rolling stock units.',
      'Handling cyclic route dependencies without entering infinite recursion states.'
    ],
    githubUrl: 'https://github.com/Koustav-Source'
  },
  {
    id: 'voice-rag',
    name: 'Voice-Enabled RAG System',
    tagline: 'Multimodal conversational retrieval augmented generation pipeline',
    category: 'AI & Intelligent Systems',
    tier: 2,
    status: 'Research',
    year: '2026',
    stack: ['Python', 'LLM APIs', 'Vector Database', 'Speech-to-Text', 'FastAPI'],
    description: 'An experimental voice-queried knowledge retrieval system combining speech transcription with semantic vector search and grounded LLM synthesis.',
    overview: 'This system allows users to query domain-specific technical documentation via voice input, retrieving exact contextual snippets and synthesized audio responses.',
    problem: 'Standard keyword search fails when users ask complex, conceptual questions phrased colloquially via voice.',
    engineering: 'Integrated speech transcription pipelines with dense vector embeddings stored in an indexed vector space. Built FastAPI backend to orchestrate STT, semantic retrieval, and contextual generation.',
    architectureDetails: 'Audio Input ---> STT Transcription ---> Embedding Generator ---> Vector Index Search ---> Context Assembler ---> LLM Generator',
    keyFeatures: [
      'Low-latency speech-to-text integration with noise filtering',
      'Semantic chunking and vector indexing of technical documentation',
      'Grounded prompt assembly ensuring answers cite original document sources',
      'Asynchronous REST endpoints for streaming generation'
    ],
    challenges: [
      'Mitigating hallucination risks when retrieval context is ambiguous or incomplete.',
      'Minimizing end-to-end voice query latency across STT, vector search, and generation steps.'
    ],
    githubUrl: 'https://github.com/Koustav-Source'
  },
  {
    id: 'kisansetu',
    name: 'KisanSetu',
    tagline: 'Agricultural supply chain & direct market linkage platform',
    category: 'Full-Stack Applications',
    tier: 2,
    status: 'Active',
    year: '2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    description: 'A digital marketplace bridging local agricultural producers with regional buyers, streamlining produce listing, pricing transparency, and order fulfillment.',
    overview: 'KisanSetu provides a streamlined inventory and order management portal designed to reduce intermediary friction in agricultural distribution.',
    problem: 'Small-scale producers often lack transparent price discovery mechanisms and direct channels to institutional buyers.',
    engineering: 'Built a responsive React frontend coupled with an Express/MongoDB backend featuring role-based access control and atomic inventory deduction transactions.',
    architectureDetails: 'React SPA ---> Express REST API ---> MongoDB ODM ---> Transactional Order Manager',
    keyFeatures: [
      'Dynamic produce catalog with category filtering and real-time stock status',
      'Secure buyer-seller authentication with JWT session management',
      'Order lifecycle tracking from inquiry to fulfillment confirmation',
      'Optimized database indexing for fast regional search queries'
    ],
    challenges: [
      'Ensuring ACID-like consistency in MongoDB during concurrent purchase attempts on limited produce inventory.',
      'Designing a clean mobile-first interface suitable for low-bandwidth environments.'
    ],
    liveUrl: 'https://github.com/Koustav-Source',
    githubUrl: 'https://github.com/Koustav-Source'
  },
  {
    id: 'climatex',
    name: 'ClimateX',
    tagline: 'AI-Powered Weather Forecaster & Atmospheric Modeling Web App',
    category: 'Full-Stack & AI Systems',
    tier: 3,
    status: 'Completed',
    year: '2025',
    stack: ['Python', 'React', 'Node.js', 'Machine Learning', 'REST APIs'],
    description: 'A predictive web application leveraging Python and machine learning algorithms to model and forecast real-time global weather parameters.',
    overview: 'ClimateX processes meteorological data streams to deliver accurate atmospheric forecasts with robust error-handling safeguards.',
    problem: 'Weather forecasting endpoints frequently experience upstream API timeouts or malformed payloads during severe meteorological events.',
    engineering: 'Implemented secure API error-handling logic and failure mitigation strategies (fallback heuristics and cached baseline profiles) to maintain application availability during network downtime.',
    architectureDetails: 'Client SPA ---> Express Gateway ---> Python ML Forecasting Module ---> External Weather Data Feed',
    keyFeatures: [
      'Real-time global weather parameter modeling and visualization',
      'Machine learning regression scripts for atmospheric trend prediction',
      'Robust error-handling middleware preventing cascading failures during network downtime',
      'Clean, high-contrast meteorological dashboard interface'
    ],
    challenges: [
      'Handling erratic response structures from legacy weather data providers gracefully without crashing the client UI.',
      'Optimizing client-side bundle size while rendering complex meteorological charts.'
    ],
    liveUrl: 'https://climatex-weather-forecast-web-git-97f329-koustav-deys-projects.vercel.app/',
    githubUrl: 'https://github.com/Koustav-Source',
    caseStudyUrl: '#climatex'
  },
  {
    id: 'resumebuilder',
    name: 'Dynamic Resume Builder X Pro',
    tagline: 'Full-stack document generation & real-time rendering engine',
    category: 'Full-Stack Tools',
    tier: 3,
    status: 'Completed',
    year: '2025',
    stack: ['React.js', 'Node.js', 'PDF Generation', 'Tailwind CSS'],
    description: 'Architected a full-stack document generation tool utilizing React.js and Node.js for real-time data rendering and localized PDF compilation.',
    overview: 'Resume Builder X Pro provides structured professional template rendering with instant visual feedback and clean PDF export capabilities.',
    problem: 'Client-side PDF renderers often suffer from inconsistent typography scaling and broken page breaks across different browser engines.',
    engineering: 'Engineered a dual-phase rendering pipeline where form state is synchronized with a virtual layout engine before server-side or client-side PDF compilation.',
    architectureDetails: 'Form State Input ---> Live DOM Preview Renderer ---> Document Layout Engine ---> Localized PDF Compiler',
    keyFeatures: [
      'Real-time split-pane preview updating instantly upon form keystrokes',
      'Strict adherence to professional typographical grid standards',
      'Export pipeline producing clean, selectable text PDFs',
      'Modular section reordering and customization'
    ],
    challenges: [
      'Maintaining exact CSS print media query fidelity across diverse browser print engines.',
      'Managing complex nested form state without input lag.'
    ],
    githubUrl: 'https://github.com/Koustav-Source'
  },
  {
    id: 'quizapp',
    name: 'Quiz App',
    tagline: 'Interactive technical assessment and scoring platform',
    category: 'Web Applications',
    tier: 3,
    status: 'Completed',
    year: '2025',
    stack: ['JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3'],
    description: 'A dynamic assessment platform featuring timed evaluations, instant scoring, and detailed question breakdown summaries.',
    overview: 'Quiz App delivers a streamlined platform for evaluating technical knowledge across software engineering domains.',
    problem: 'Static assessment tools lack interactive telemetry and precise timer management, leading to unfair evaluation constraints.',
    engineering: 'Built with vanilla JavaScript state management and an Express backend handling question bank retrieval and score verification.',
    architectureDetails: 'Client State Engine ---> Express Question API ---> JSON Question Store',
    keyFeatures: [
      'Precise countdown timer with state preservation on accidental page reloads',
      'Comprehensive post-quiz review with correct answer rationales',
      'Responsive design optimized for desktop and mobile screens',
      'Lightweight client footprint with zero heavy framework bloat'
    ],
    challenges: [
      'Preventing state drift between client timer intervals and server submission timestamps.',
      'Ensuring instant responsiveness on lower-end mobile devices.'
    ],
    liveUrl: 'https://quiz-app-c0e9.onrender.com/',
    githubUrl: 'https://github.com/Koustav-Source'
  }
];

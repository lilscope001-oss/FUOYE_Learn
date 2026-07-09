const courseCatalog = [
    {
        level: "100L",
        semester: "First Semester",
        code: "CSC101",
        title: "Introduction to Computer Science I",
        outline: "History and evolution of computers; computer generations; number systems and data representation; computer hardware components; categories of software; problem-solving concepts; applications of computers in society."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "MTH101",
        title: "Elementary Mathematics I",
        outline: "Real numbers, indices and surds; logarithms; quadratic equations and inequalities; sequences and series; trigonometric functions and identities; permutation and combination; binomial theorem."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "PHY101",
        title: "General Physics I",
        outline: "Measurement and units; scalars and vectors; kinematics; Newton's laws of motion; work, energy and power; conservation laws; gravitation; properties of matter; temperature and heat."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "CHM101",
        title: "General Chemistry I",
        outline: "Atomic structure and periodicity; chemical bonding and molecular geometry; stoichiometry; states of matter; thermochemistry; acids, bases and salts; oxidation-reduction reactions."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "GST101",
        title: "Communication in English I",
        outline: "Listening and speaking skills; reading comprehension; sentence structure and grammar; vocabulary development; essay writing; oral English and phonetics."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "GST103",
        title: "Use of Library and ICT",
        outline: "Library organisation and services; bibliographic tools; referencing and citation styles; digital literacy; internet navigation; information retrieval systems; academic integrity and plagiarism."
    },
    {
        level: "100L",
        semester: "First Semester",
        code: "GST105",
        title: "Introduction to Entrepreneurship",
        outline: "Concepts of entrepreneurship and enterprise; identifying business opportunities; creativity and innovation; self-employment and small business management; introduction to business planning."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "CSC102",
        title: "Introduction to Computer Science II",
        outline: "Problem analysis and algorithm development; flowcharts and pseudocode; introduction to programming concepts; operating system fundamentals; file management; computer ethics and security awareness."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "MTH102",
        title: "Elementary Mathematics II",
        outline: "Differentiation: limits, derivatives and rules; applications of differentiation; integration: indefinite and definite integrals; matrices and determinants; coordinate geometry; complex numbers."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "PHY102",
        title: "General Physics II",
        outline: "Electrostatics and electric fields; electric current and circuits; magnetic fields and electromagnetic induction; optics: reflection, refraction and lenses; introduction to modern physics and electronics."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "CHM102",
        title: "General Chemistry II",
        outline: "Organic chemistry fundamentals; hydrocarbons: alkanes, alkenes and alkynes; functional groups; reaction mechanisms; electrochemistry; chemical kinetics and equilibrium."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "GST102",
        title: "Communication in English II",
        outline: "Advanced reading and comprehension; technical and report writing; letter and memo writing; presentation skills; research writing; precis and summarisation."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "GST106",
        title: "Entrepreneurial Skills and Business Concepts",
        outline: "Business planning and feasibility studies; marketing principles and strategies; financial management for entrepreneurs; enterprise development; legal framework for business; social entrepreneurship."
    },
    {
        level: "100L",
        semester: "Second Semester",
        code: "GST108",
        title: "Nigerian Government and Culture",
        outline: "Nigerian pre-colonial and colonial history; independence and constitutional development; structure of Nigerian government; Nigerian cultural heritage and diversity; national values and civic responsibility."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "CSC201",
        title: "Computer Programming I",
        outline: "Principles of structured programming; data types, variables and constants; control structures: sequence, selection and iteration; arrays and strings; functions and parameter passing; introduction to C/C++ programming."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "CSC203",
        title: "Discrete Structures",
        outline: "Propositional and predicate logic; set theory; relations and functions; mathematical induction; Boolean algebra; graph theory fundamentals; combinatorics and counting principles."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "CSC205",
        title: "Computer Organization and Architecture I",
        outline: "Digital logic: gates, Boolean functions and simplification; combinational circuits; sequential circuits and flip-flops; registers and counters; memory organisation; CPU structure and instruction set architecture."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "CSC207",
        title: "Introduction to Information Systems",
        outline: "Concepts of data, information and knowledge; types and components of information systems; database fundamentals; management information systems; information systems development; e-commerce and digital systems."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "MTH201",
        title: "Mathematical Methods I",
        outline: "Vector algebra and calculus; ordinary differential equations; Laplace transforms; partial differentiation; series solutions; mathematical modeling of real-world problems."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "STA201",
        title: "Probability and Statistics",
        outline: "Data collection and presentation; measures of central tendency and dispersion; probability theory; probability distributions: binomial, Poisson and normal; sampling and estimation; hypothesis testing."
    },
    {
        level: "200L",
        semester: "First Semester",
        code: "GST201",
        title: "Nigerian Peoples and Culture",
        outline: "Ethnic nationalities and cultural zones of Nigeria; religion, tradition and customs; cultural arts and festivals; inter-ethnic relations; national unity and integration; cultural policy in Nigeria."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "CSC202",
        title: "Computer Programming II",
        outline: "Object-oriented programming concepts; classes, objects and encapsulation; inheritance and polymorphism; pointers and memory management; file handling; introduction to data abstraction; programming in C++/Java."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "CSC204",
        title: "Data Structures",
        outline: "Abstract data types; arrays, records and strings; stacks and queues; linked lists: singly and doubly linked; trees: binary trees, BST and traversals; graphs: representation and traversal; sorting and searching algorithms."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "CSC206",
        title: "Computer Organization and Architecture II",
        outline: "Input/output organisation and interfacing; assembly language programming; microprogramming and control unit design; pipeline processing; cache memory and virtual memory; multiprocessor systems overview."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "CSC208",
        title: "Numerical Analysis",
        outline: "Errors and approximations; roots of nonlinear equations; numerical differentiation and integration; interpolation methods; solution of linear systems; numerical solution of ordinary differential equations."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "CSC210",
        title: "Logic Design",
        outline: "Number systems and codes; Boolean algebra and minimisation; Karnaugh maps; combinational logic design; arithmetic circuits; sequential logic: latches, flip-flops, registers and counters; finite state machines."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "MTH202",
        title: "Mathematical Methods II",
        outline: "Functions of complex variables; complex integration; Fourier series and transforms; Z-transforms; vector spaces and linear transformations; eigenvalues and eigenvectors."
    },
    {
        level: "200L",
        semester: "Second Semester",
        code: "GST202",
        title: "Philosophy and Logic",
        outline: "Nature and scope of philosophy; logic and reasoning: deductive and inductive; fallacies; ethics and moral philosophy; epistemology; African philosophy; philosophy of science and technology."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC301",
        title: "Operating Systems I",
        outline: "Operating system concepts and structures; process management: creation, states and scheduling algorithms; inter-process communication; concurrency and synchronisation; memory management: paging and segmentation; file system organisation."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC303",
        title: "Database Management Systems",
        outline: "Database models: hierarchical, network and relational; entity-relationship modelling; relational algebra and calculus; SQL: DDL, DML and DCL; normalisation: 1NF to BCNF; transaction management and concurrency control; database security."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC305",
        title: "Systems Analysis and Design",
        outline: "Systems development life cycle; feasibility analysis; requirements elicitation and specification; structured analysis tools: DFDs, ERDs and data dictionaries; system design strategies; UML modelling; implementation and maintenance."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC307",
        title: "Algorithms and Complexity Analysis",
        outline: "Algorithm design paradigms: divide-and-conquer, greedy, dynamic programming and backtracking; analysis of algorithms: time and space complexity; asymptotic notation; advanced sorting algorithms; graph algorithms; NP-completeness."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC309",
        title: "Computer Networks I",
        outline: "Network models: OSI and TCP/IP; data transmission concepts; LAN and WAN technologies; switching and routing; IP addressing and subnetting; transport layer protocols: TCP and UDP; network devices and topologies."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC311",
        title: "Web Technology",
        outline: "Internet architecture and protocols; HTML5 and CSS3; JavaScript fundamentals; responsive web design; web servers and hosting; introduction to web application development; web accessibility and usability standards."
    },
    {
        level: "300L",
        semester: "First Semester",
        code: "CSC313",
        title: "Human-Computer Interaction",
        outline: "HCI concepts and history; user-centred design principles; cognitive models and mental models; interface design guidelines; prototyping and evaluation methods; usability testing; accessibility and universal design."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC302",
        title: "Operating Systems II",
        outline: "Deadlock: detection, prevention and avoidance; virtual memory and demand paging; secondary storage management; distributed operating systems; system security and protection; virtualisation concepts; case studies: Linux and Windows."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC304",
        title: "Software Engineering",
        outline: "Software process models: waterfall, agile and spiral; requirements engineering; software design: architectural and detailed design; coding standards; software testing: unit, integration and system; maintenance; software project management."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC306",
        title: "Artificial Intelligence",
        outline: "AI history and foundations; intelligent agents; problem solving by search: uninformed and informed; knowledge representation: logic and semantic networks; expert systems; machine learning overview; natural language processing basics."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC308",
        title: "Compiler Construction",
        outline: "Phases of compilation; lexical analysis and regular expressions; context-free grammars and parsing; top-down and bottom-up parsers; semantic analysis and type checking; intermediate code generation; code optimisation and generation."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC310",
        title: "Computer Networks II",
        outline: "Advanced routing protocols; wireless and mobile networks; network security: firewalls, VPNs and IDS; application layer protocols: HTTP, FTP, SMTP and DNS; network management; software-defined networking; cloud networking concepts."
    },
    {
        level: "300L",
        semester: "Second Semester",
        code: "CSC312",
        title: "Research Methods in Computer Science",
        outline: "Nature and scope of research; types and ethics of research; literature review and referencing; research design and methodology; data collection instruments; statistical data analysis; technical writing; research proposal and report writing."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC401",
        title: "Software Engineering and Project Management",
        outline: "Advanced software development methodologies; agile and DevOps practices; software quality assurance and metrics; project planning: work breakdown, scheduling and risk management; cost estimation; software configuration management; team dynamics."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC403",
        title: "Computer Graphics and Visualisation",
        outline: "Graphics systems and pipeline; 2D and 3D transformations; viewing and projection; visible surface determination; shading and lighting models; texture mapping; introduction to OpenGL; scientific visualisation; animation fundamentals."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC405",
        title: "Network Security and Cryptography",
        outline: "Cryptography fundamentals: symmetric and asymmetric encryption; hash functions and digital signatures; public key infrastructure; network attacks and defences; firewalls and intrusion detection; web security; ethical hacking overview; security standards and compliance."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC407",
        title: "Distributed Systems",
        outline: "Characteristics and models of distributed systems; inter-process communication; naming and directory services; synchronisation and mutual exclusion; distributed file systems; replication and consistency; fault tolerance; cloud computing and microservices."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC409",
        title: "Data Communication",
        outline: "Signals and transmission media; encoding and modulation techniques; error detection and correction; data link protocols; multiplexing; switching technologies; broadband communications; wireless communication standards."
    },
    {
        level: "400L",
        semester: "First Semester",
        code: "CSC411",
        title: "Technical Seminar",
        outline: "Literature review and research presentation skills; critical analysis of current trends in computing; technical paper writing and review; oral and written communication of research findings; professional and ethical responsibility in computing."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC402",
        title: "Computer Simulation and Modelling",
        outline: "Concepts of simulation and modelling; discrete-event and continuous simulation; Monte Carlo methods; stochastic modelling; simulation tools and languages; model verification and validation; applications in engineering, science and business."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC404",
        title: "Machine Learning and Intelligent Systems",
        outline: "Supervised learning: regression and classification; unsupervised learning: clustering and dimensionality reduction; neural networks and deep learning; model evaluation and validation; feature engineering; ensemble methods; applications of machine learning."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC406",
        title: "Internet and Web Programming",
        outline: "Client-server architecture; server-side programming; RESTful APIs and web services; database-driven web applications; authentication and session management; front-end frameworks; deployment and cloud hosting; web application security."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC408",
        title: "Parallel and Distributed Computing",
        outline: "Parallel computing models: shared memory and message passing; GPU computing; parallel algorithm design; MPI and OpenMP programming; performance analysis of parallel programs; concurrent programming; distributed data processing frameworks."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC410",
        title: "Information Security Management",
        outline: "Information security principles: CIA triad; risk assessment and management; security policies and standards: ISO 27001; incident response and digital forensics; business continuity planning; cyber threat intelligence; legal and ethical issues in information security."
    },
    {
        level: "400L",
        semester: "Second Semester",
        code: "CSC412",
        title: "ICT Entrepreneurship and Innovation",
        outline: "Technology entrepreneurship and startup ecosystems; innovation management and design thinking; ICT product development; business model canvas; funding and venture capital; digital marketing; intellectual property in ICT; case studies of successful tech ventures."
    }
];

function findCourse(courseCode) {
    const normalizedCode = (courseCode || "").replace(/\s+/g, "").toUpperCase();
    return courseCatalog.find(course => course.code === normalizedCode);
}

function getCourseTopics(course) {
    return course.outline
        .split(";")
        .map(topic => topic.trim().replace(/\.$/, ""))
        .filter(Boolean);
}

function generateQuizQuestions(courseCode) {
    const course = findCourse(courseCode);

    if (!course) return [];

    const topics = getCourseTopics(course);
    const questions = uniqueQuestions(topics
        .map(topic => createConceptQuestion(course, topic))
        .filter(Boolean)
    ).slice(0, 7);

    questions.push(createCourseOutcomeQuestion(course));
    questions.push(createScenarioQuestion(course, topics));
    questions.push(createAssessmentQuestion(course));

    return questions;
}

const conceptQuestionTemplates = [
    {
        keywords: ["database models"],
        question: "A team must choose how data entities and their relationships will be structured before implementation. What are they comparing?",
        correct: "Database models such as hierarchical, network, and relational models",
        wrong: ["CPU scheduling policies", "Optical lens types", "Essay paragraph patterns"]
    },
    {
        keywords: ["entity-relationship"],
        question: "Before creating tables, an analyst draws entities, attributes, and relationships for a school system. What modelling tool is being used?",
        correct: "Entity-relationship modelling",
        wrong: ["Round-robin scheduling", "Fourier transformation", "Thermochemical calculation"]
    },
    {
        keywords: ["relational algebra", "relational calculus"],
        question: "A database student describes queries using formal operations such as selection, projection, and join. Which foundation is being applied?",
        correct: "Relational algebra",
        wrong: ["Boolean circuit timing", "Newtonian mechanics", "Business feasibility analysis"]
    },
    {
        keywords: ["transaction management", "concurrency control"],
        question: "Two users update related records at the same time. Which DBMS feature helps keep the data consistent?",
        correct: "Transaction management and concurrency control",
        wrong: ["Texture mapping", "Oral phonetics", "Permutation and combination"]
    },
    {
        keywords: ["normalisation", "normalization"],
        question: "A database table stores the same student details in many rows. What design practice should be applied first?",
        correct: "Normalise the tables to reduce redundancy and update anomalies",
        wrong: ["Add more duplicate columns for faster typing", "Store all records in one spreadsheet-like table", "Disable transaction control"]
    },
    {
        keywords: ["sql"],
        question: "A developer needs to create, retrieve, update, and delete records in a relational database. Which tool is most appropriate?",
        correct: "SQL statements such as DDL and DML commands",
        wrong: ["A graphics rendering pipeline", "A packet switching protocol", "A binary search tree traversal"]
    },
    {
        keywords: ["process management", "scheduling"],
        question: "Several programs are ready to run on the CPU. Which operating-system responsibility decides the order they execute?",
        correct: "Process scheduling",
        wrong: ["Optical refraction", "Database normalisation", "Chemical bonding"]
    },
    {
        keywords: ["deadlock"],
        question: "Two processes each hold one resource and wait forever for the other resource. What problem has occurred?",
        correct: "Deadlock",
        wrong: ["Cache hit", "Packet forwarding", "Linear interpolation"]
    },
    {
        keywords: ["memory management", "paging", "segmentation", "virtual memory"],
        question: "An operating system must let programs use memory efficiently without overwriting each other. Which area handles this?",
        correct: "Memory management",
        wrong: ["Thermochemistry", "Business model canvas", "Oral phonetics"]
    },
    {
        keywords: ["data types", "variables", "constants"],
        question: "In a program, why should a variable's data type be chosen carefully?",
        correct: "It determines the kind of value stored and the valid operations on it",
        wrong: ["It changes the monitor resolution", "It encrypts every network packet", "It replaces the need for algorithms"]
    },
    {
        keywords: ["control structures", "sequence", "selection", "iteration"],
        question: "A program must repeat a calculation until a condition is false. Which control structure is needed?",
        correct: "Iteration",
        wrong: ["Encapsulation", "Multiplexing", "Referencing"]
    },
    {
        keywords: ["object-oriented", "classes", "objects", "encapsulation", "inheritance", "polymorphism"],
        question: "A software team groups data and related behaviour into reusable blueprints. Which programming approach are they using?",
        correct: "Object-oriented programming",
        wrong: ["Fourier analysis", "Chemical kinetics", "Civic responsibility"]
    },
    {
        keywords: ["stacks", "queues"],
        question: "A printer processes jobs in the order they arrive. Which data structure best models this behaviour?",
        correct: "Queue",
        wrong: ["Stack", "Binary search tree", "Hash function"]
    },
    {
        keywords: ["linked lists"],
        question: "Which data structure is best when items must be inserted frequently without shifting large array sections?",
        correct: "Linked list",
        wrong: ["Fixed-size array only", "Truth table", "Public key certificate"]
    },
    {
        keywords: ["trees", "binary trees", "bst"],
        question: "A search feature repeatedly chooses left or right branches based on ordered keys. Which structure is most likely being used?",
        correct: "Binary search tree",
        wrong: ["Queue", "Truth table", "Memo"]
    },
    {
        keywords: ["sorting", "searching"],
        question: "A student wants to arrange records alphabetically before lookup. Which algorithm category is most relevant?",
        correct: "Sorting algorithms",
        wrong: ["Semantic analysis", "Electrochemistry", "Cultural policy"]
    },
    {
        keywords: ["logic", "propositional", "predicate"],
        question: "A statement must be tested as either true or false before drawing a conclusion. Which area supports this reasoning?",
        correct: "Formal logic",
        wrong: ["Texture mapping", "Organic chemistry", "Business funding"]
    },
    {
        keywords: ["set theory", "relations", "functions"],
        question: "A lecturer models valid pairings between students and registered courses. Which discrete-structures concept fits best?",
        correct: "Relations",
        wrong: ["Thermochemistry", "Optical lenses", "Cache memory"]
    },
    {
        keywords: ["graph theory", "graph algorithms"],
        question: "Roads between cities are modelled as connections between points. Which computing structure fits this model?",
        correct: "Graph",
        wrong: ["Stack frame", "Chemical bond", "Essay outline"]
    },
    {
        keywords: ["boolean algebra", "logic design", "gates", "karnaugh"],
        question: "A circuit designer simplifies a digital expression before building hardware. Which concept is most useful?",
        correct: "Boolean algebra and minimisation",
        wrong: ["Research sampling", "Complex integration", "Marketing strategy"]
    },
    {
        keywords: ["cpu", "instruction set", "registers", "counters", "memory organisation"],
        question: "A computer executes machine instructions using registers, memory, and a control unit. Which subject studies this organisation?",
        correct: "Computer organization and architecture",
        wrong: ["Entrepreneurial finance", "Organic reaction mechanisms", "Oral English"]
    },
    {
        keywords: ["cache memory"],
        question: "Why is cache memory placed close to the CPU?",
        correct: "To reduce average memory access time",
        wrong: ["To store only printed documents", "To replace all secondary storage", "To create database tables"]
    },
    {
        keywords: ["network models", "osi", "tcp/ip"],
        question: "A network engineer explains communication in layers from physical transmission to applications. Which framework is being used?",
        correct: "OSI or TCP/IP network model",
        wrong: ["Entity-relationship model", "Binomial theorem", "UML use case"]
    },
    {
        keywords: ["ip addressing", "subnetting"],
        question: "An organisation divides one network into smaller logical networks. What is this process called?",
        correct: "Subnetting",
        wrong: ["Parsing", "Encapsulation in OOP", "Normalising a database"]
    },
    {
        keywords: ["firewalls", "vpn", "ids", "network security"],
        question: "A company wants to monitor malicious traffic and control access to its network. Which tools are most relevant?",
        correct: "Firewalls and intrusion detection systems",
        wrong: ["Sorting and searching only", "Essay writing and phonetics", "Matrices and determinants"]
    },
    {
        keywords: ["cryptography", "encryption", "digital signatures", "hash functions"],
        question: "A banking app must prove a message was not altered and came from the claimed sender. Which security concept helps?",
        correct: "Digital signatures and hashing",
        wrong: ["Round-robin scheduling", "Karnaugh maps", "Coordinate geometry"]
    },
    {
        keywords: ["html", "css", "javascript", "responsive web design"],
        question: "A webpage must adapt cleanly to phones and laptops. Which practice addresses this requirement?",
        correct: "Responsive web design",
        wrong: ["Deadlock avoidance", "Stoichiometry", "Cache replacement only"]
    },
    {
        keywords: ["restful apis", "web services"],
        question: "A web app exchanges data with a server using structured endpoints over HTTP. What is it most likely using?",
        correct: "RESTful APIs",
        wrong: ["Flip-flop circuits", "Fourier series", "Library catalogues"]
    },
    {
        keywords: ["authentication", "session management"],
        question: "A web application must remember a user securely after login. Which area handles this?",
        correct: "Authentication and session management",
        wrong: ["Texture mapping", "Acid-base titration", "Permutation"]
    },
    {
        keywords: ["hci", "user-centred", "usability", "accessibility"],
        question: "A team tests whether students can complete tasks easily in an app. Which discipline guides this evaluation?",
        correct: "Human-computer interaction and usability testing",
        wrong: ["Compiler optimisation", "Electrostatics", "Oxidation-reduction"]
    },
    {
        keywords: ["algorithm design", "complexity", "asymptotic"],
        question: "Two algorithms solve the same problem, but one grows much slower as input size increases. What should be compared?",
        correct: "Time and space complexity",
        wrong: ["Presentation style", "Molecular geometry", "National values"]
    },
    {
        keywords: ["divide-and-conquer", "greedy", "dynamic programming", "backtracking"],
        question: "A problem is solved by breaking it into smaller subproblems and combining results. Which design idea is being used?",
        correct: "Divide-and-conquer",
        wrong: ["Public key infrastructure", "Business feasibility", "Citation style"]
    },
    {
        keywords: ["lexical analysis", "parsing", "semantic analysis", "code generation"],
        question: "A compiler checks source code structure against grammar rules. Which phase is involved?",
        correct: "Parsing",
        wrong: ["Subnetting", "Sampling", "Heat transfer"]
    },
    {
        keywords: ["clustering", "unsupervised"],
        question: "A system groups customers without predefined labels. Which machine-learning task is this?",
        correct: "Clustering",
        wrong: ["Regression with labels", "Deadlock prevention", "File handling"]
    },
    {
        keywords: ["machine learning", "supervised learning", "classification", "regression"],
        question: "A model learns from labelled examples to predict whether emails are spam or not. Which learning type is this?",
        correct: "Supervised learning",
        wrong: ["Uninformed search", "Manual citation", "Sequential circuit design"]
    },
    {
        keywords: ["simulation", "monte carlo", "stochastic"],
        question: "A researcher uses repeated random trials to estimate uncertain outcomes. Which method is being applied?",
        correct: "Monte Carlo simulation",
        wrong: ["Binary search", "Boolean minimisation", "Technical memo writing"]
    },
    {
        keywords: ["parallel", "gpu", "mpi", "openmp"],
        question: "A computation is split among many processors to finish faster. Which computing model is being used?",
        correct: "Parallel computing",
        wrong: ["Single-table normalisation", "Listening comprehension", "Organic functional grouping"]
    },
    {
        keywords: ["distributed systems", "replication", "fault tolerance", "cloud computing", "microservices"],
        question: "A service continues operating even when one server fails. Which distributed-systems goal is being achieved?",
        correct: "Fault tolerance",
        wrong: ["Trigonometric identity", "Referencing style", "Stoichiometric balance"]
    },
    {
        keywords: ["risk assessment", "incident response", "digital forensics", "cia triad"],
        question: "An organisation classifies threats, prepares recovery steps, and protects confidentiality, integrity, and availability. Which field is this?",
        correct: "Information security management",
        wrong: ["Database indexing only", "Coordinate geometry", "Library organisation"]
    },
    {
        keywords: ["business model canvas", "startup", "venture capital", "digital marketing"],
        question: "A founder maps customers, value proposition, revenue streams, and partners. Which tool supports this planning?",
        correct: "Business model canvas",
        wrong: ["Finite state machine", "Normal distribution", "Assembly instruction"]
    },
    {
        keywords: ["research design", "literature review", "proposal", "technical writing"],
        question: "Before starting a study, a student reviews previous work and defines methods. Which research activity is this?",
        correct: "Research design and literature review",
        wrong: ["Cache mapping", "Optical refraction", "Hydrocarbon naming"]
    },
    {
        keywords: ["hypothesis testing", "probability distributions", "sampling"],
        question: "A statistician decides whether sample evidence supports a claim about a population. Which procedure is used?",
        correct: "Hypothesis testing",
        wrong: ["Lexical analysis", "Inheritance", "Firewall configuration"]
    },
    {
        keywords: ["differentiation", "derivatives"],
        question: "Which mathematical tool measures the instantaneous rate of change of a function?",
        correct: "Derivative",
        wrong: ["Matrix determinant", "Packet switch", "Hash function"]
    },
    {
        keywords: ["integration", "integrals"],
        question: "Which mathematical process is commonly used to find accumulated area under a curve?",
        correct: "Integration",
        wrong: ["Subnetting", "Encapsulation", "Citation"]
    },
    {
        keywords: ["matrices", "determinants", "eigenvalues", "vector spaces"],
        question: "A system of linear equations is represented compactly for computation. Which mathematical object is commonly used?",
        correct: "Matrix",
        wrong: ["Queue", "Firewall", "Memo"]
    },
    {
        keywords: ["newton", "kinematics", "work, energy and power", "gravitation"],
        question: "A physicist analyses how forces affect motion. Which area of physics is most relevant?",
        correct: "Mechanics",
        wrong: ["Organic chemistry", "Web accessibility", "Database security"]
    },
    {
        keywords: ["electrostatics", "electric current", "magnetic fields"],
        question: "A circuit contains voltage sources, current flow, and magnetic effects. Which physics area studies it?",
        correct: "Electricity and magnetism",
        wrong: ["Compiler parsing", "Entrepreneurial finance", "Sentence structure"]
    },
    {
        keywords: ["atomic structure", "chemical bonding", "stoichiometry"],
        question: "A chemist calculates reactant quantities from a balanced chemical equation. Which concept is being used?",
        correct: "Stoichiometry",
        wrong: ["Object polymorphism", "Subnetting", "Fourier transform"]
    },
    {
        keywords: ["hydrocarbons", "functional groups", "reaction mechanisms"],
        question: "A compound's reactions are predicted from the group of atoms attached to its carbon chain. Which concept is central?",
        correct: "Functional groups",
        wrong: ["Finite state machines", "Sampling error", "User-centred design"]
    },
    {
        keywords: ["reading comprehension", "essay writing", "technical and report writing", "presentation skills"],
        question: "A student prepares a clear academic report with evidence, structure, and audience awareness. Which skill is being assessed?",
        correct: "Academic and technical communication",
        wrong: ["Pipeline processing", "Electrochemical equilibrium", "Graph traversal"]
    },
    {
        keywords: ["referencing", "citation", "plagiarism", "academic integrity"],
        question: "A student uses another author's idea in an assignment. What should they do to maintain academic integrity?",
        correct: "Cite and reference the source properly",
        wrong: ["Remove all punctuation", "Encrypt the paragraph", "Convert it to binary"]
    },
    {
        keywords: ["nigerian", "culture", "government", "civic"],
        question: "A course examines national values, cultural diversity, and civic responsibility. What is the main learning goal?",
        correct: "Understanding society, citizenship, and cultural identity",
        wrong: ["Designing CPU registers", "Training neural networks", "Balancing chemical equations"]
    }
];

function createConceptQuestion(course, topic) {
    const normalizedTopic = topic.toLowerCase();
    const template = conceptQuestionTemplates.find(item =>
        item.keywords.some(keyword => normalizedTopic.includes(keyword))
    );

    if (template) {
        return buildQuestion(template.question, template.correct, template.wrong);
    }

    return createAppliedTopicQuestion(course, topic);
}

function createAppliedTopicQuestion(course, topic) {
    return buildQuestion(
        `A ${course.code} exam asks students to apply "${topic}" to a realistic problem. What response would earn the most credit?`,
        "Explain the concept, justify why it matters, and apply it to a relevant example",
        [
            "List isolated keywords without explaining their meaning",
            "Answer with an unrelated concept from another course",
            "Copy the course title without solving the problem"
        ]
    );
}

function uniqueQuestions(questions) {
    const seen = new Set();

    return questions.filter(question => {
        if (seen.has(question.question)) return false;
        seen.add(question.question);
        return true;
    });
}

function createCourseOutcomeQuestion(course) {
    return buildQuestion(
        `What best describes the main focus of ${course.code} - ${course.title}?`,
        simplifyOutline(course.outline),
        getDifferentCourseFocus(course.code)
    );
}

function createScenarioQuestion(course, topics) {
    const firstTopic = topics[0] || course.title;
    const secondTopic = topics[1] || firstTopic;

    return buildQuestion(
        `A lecturer combines "${firstTopic}" with "${secondTopic}" in an assessment. What kind of question is most appropriate?`,
        `A question that tests understanding and application within ${course.title}`,
        [
            "A question that only asks students to copy the timetable",
            "A question unrelated to the course outline",
            "A question that ignores both concepts completely"
        ]
    );
}

function createAssessmentQuestion(course) {
    return buildQuestion(
        `How should a student prepare professionally for a quiz in ${course.code}?`,
        "Study the concepts, examples, definitions, and real applications in the outline",
        [
            "Read only the course title and skip the outline",
            "Depend only on guessing the option positions",
            "Study unrelated courses instead"
        ]
    );
}

function simplifyOutline(outline) {
    const topics = outline.split(";").slice(0, 3).map(topic => topic.trim());
    return `Understanding ${topics.join(", ")}`;
}

function getDifferentCourseFocus(courseCode) {
    return courseCatalog
        .filter(course => course.code !== courseCode)
        .slice(0, 3)
        .map(course => simplifyOutline(course.outline));
}

function buildQuestion(question, correctOption, wrongOptions) {
    const options = [...new Set([correctOption, ...wrongOptions])]
        .filter(Boolean)
        .slice(0, 4);

    while (options.length < 4) {
        options.push("None of the above");
    }

    const rotatedOptions = rotateOptions(options, question.length % options.length);

    return {
        question,
        options: rotatedOptions,
        answer: rotatedOptions.indexOf(correctOption),
    };
}

function rotateOptions(options, offset) {
    return options.slice(offset).concat(options.slice(0, offset));
}

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
    const distractorTopics = courseCatalog
        .filter(item => item.code !== course.code)
        .flatMap(item => getCourseTopics(item))
        .filter(Boolean);

    const questions = topics.slice(0, 6).map((topic, index) => {
        const wrongOptions = distractorTopics
            .slice(index * 3, index * 3 + 3);

        return buildQuestion(
            `Which topic is part of ${course.code} - ${course.title}?`,
            topic,
            wrongOptions
        );
    });

    questions.push(buildQuestion(
        `What is the official course title for ${course.code}?`,
        course.title,
        getDifferentCourseTitles(course.code)
    ));

    questions.push(buildQuestion(
        `Which level offers ${course.code}?`,
        course.level,
        ["100L", "200L", "300L", "400L"].filter(level => level !== course.level)
    ));

    questions.push(buildQuestion(
        `Which semester includes ${course.code}?`,
        course.semester,
        ["First Semester", "Second Semester"].filter(semester => semester !== course.semester)
    ));

    return questions;
}

function getDifferentCourseTitles(courseCode) {
    return courseCatalog
        .filter(course => course.code !== courseCode)
        .slice(0, 3)
        .map(course => course.title);
}

function buildQuestion(question, correctOption, wrongOptions) {
    const options = [correctOption, ...wrongOptions]
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

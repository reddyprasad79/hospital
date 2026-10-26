// Hospital Data: Comprehensive Doctors, Services, Facilities, Blog & Checkup Packages

const HOSPITAL_DATA = {
    info: {
        name: "Stackly Super Specialty Hospital",
        shortName: "Stackly",
        tagline: "World-Class Healthcare with a Compassionate Heart",
        logo: "images/logo.webp",
        emergencyPhone: "+91 98400 55500",
        appointmentPhone: "+91 (0427) 244-0199",
        email: "care@stacklyhospital.com",
        address: "Stackly Medical City, Salem - Chennai NH Express Highway, 5-Roads Junction, Salem / Chennai Region, Tamil Nadu 636004",
        workingHours: "24/7 Emergency & Inpatient Care | OPD: Mon - Sat (8:00 AM - 8:00 PM)"
    },

    stats: [
        { label: "Specialist Doctors", value: 120, suffix: "+", icon: "fa-user-doctor" },
        { label: "Happy Patients Treated", value: 85, suffix: "k+", icon: "fa-hospital-user" },
        { label: "Modern ICU Beds", value: 150, suffix: "+", icon: "fa-bed-pulse" },
        { label: "Patient Satisfaction", value: 99, suffix: "%", icon: "fa-award" }
    ],

    departments: [
        {
            id: "cardiology",
            name: "Cardiology & Cardiac Surgery",
            shortDesc: "Comprehensive heart care including angioplasty, coronary bypass surgery (CABG), pacemaker implantation, and advanced pediatric cardiac catheterization.",
            icon: "fa-heart-pulse",
            badge: "Center of Excellence",
            doctorsCount: 14,
            emergencySupport: true,
            image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=700&q=80",
            procedures: ["Coronary Angioplasty (PTCA)", "Minimally Invasive CABG", "Heart Failure Clinic", "Electrophysiology & Ablation"]
        },
        {
            id: "neurology",
            name: "Neurology & Neurosurgery",
            shortDesc: "Advanced round-the-clock intervention for acute ischemic stroke, spinal disc replacement, epilepsy surgery, and complex neuro-oncology.",
            icon: "fa-brain",
            badge: "24/7 Stroke Unit",
            doctorsCount: 10,
            emergencySupport: true,
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
            procedures: ["Endovascular Thrombectomy", "Microscopic Spine Decompression", "Deep Brain Stimulation (DBS)", "Brain Tumor Excision"]
        },
        {
            id: "orthopedics",
            name: "Orthopedics & Joint Replacement",
            shortDesc: "Pioneering robotic-assisted total knee and hip replacements, arthroscopic sports ligament reconstructions, and trauma fractures.",
            icon: "fa-bone",
            badge: "Robotic Joint Center",
            doctorsCount: 12,
            emergencySupport: true,
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
            procedures: ["Mako Robotic Total Knee", "Hip Resurfacing", "ACL/PCL Arthroscopic Reconstruction", "Complex Pelvic Trauma"]
        },
        {
            id: "pediatrics",
            name: "Pediatrics & Neonatal Care (NICU)",
            shortDesc: "Compassionate pediatric intensive therapy, level III neonatology for pre-term infants, immunization, and pediatric cardiology.",
            icon: "fa-baby",
            badge: "Level III NICU",
            doctorsCount: 9,
            emergencySupport: true,
            image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
            procedures: ["Neonatal High-Frequency Ventilation", "Pediatric Surgery", "Developmental Pediatric Screening", "Vaccination Suite"]
        },
        {
            id: "oncology",
            name: "Comprehensive Oncology & Cancer Care",
            shortDesc: "Multidisciplinary cancer management integrating precision chemotherapy, targeted biological immunotherapy, surgical resections, and radiation.",
            icon: "fa-ribbon",
            badge: "Precision Care",
            doctorsCount: 8,
            emergencySupport: false,
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80",
            procedures: ["Surgical Oncology", "Daycare Chemotherapy Infusion", "Linear Accelerator Radiation", "Genetic Tumor Profiling"]
        },
        {
            id: "emergency",
            name: "Emergency & Level 1 Trauma Center",
            shortDesc: "Accredited Level 1 trauma resuscitation bays, acute triage, immediate stroke door-to-needle treatment, and mobile ICU ambulance dispatch.",
            icon: "fa-truck-medical",
            badge: "Zero Waiting Time",
            doctorsCount: 16,
            emergencySupport: true,
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
            procedures: ["Acute Trauma Resuscitation", "Mass Casualty Incident Bay", "Cardiac Arrest Code Blue Response", "Poisoning Antidote Triage"]
        }
    ],

    doctors: [
        {
            id: 1,
            name: "Dr. Elena Rostova, MD",
            specialty: "cardiology",
            specialtyName: "Chief Interventional Cardiologist",
            experience: "16+ Years Experience",
            rating: 4.95,
            reviewsCount: 280,
            availability: "Mon, Wed, Fri (9AM - 2PM)",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
            degrees: "MD, FACC, FSCAI (Harvard Medical School)",
            bio: "Renowned expert in complex coronary interventions, bifurcation stenting, and transcatheter aortic valve replacement (TAVR)."
        },
        {
            id: 2,
            name: "Dr. Marcus Vance, MS, MCh",
            specialty: "neurology",
            specialtyName: "Head of Neuro & Spine Surgery",
            experience: "19+ Years Experience",
            rating: 4.96,
            reviewsCount: 340,
            availability: "Tue, Thu, Sat (10AM - 3PM)",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
            degrees: "MBBS, MS, MCh (Johns Hopkins University)",
            bio: "Specializes in minimally invasive endoscopic brain tumor resection, cervical disc replacement, and cerebrovascular bypass."
        },
        {
            id: 3,
            name: "Dr. Sarah Chen, MD",
            specialty: "pediatrics",
            specialtyName: "Senior Pediatrician & Neonatologist",
            experience: "14+ Years Experience",
            rating: 4.91,
            reviewsCount: 220,
            availability: "Mon to Fri (8AM - 1PM)",
            image: "https://images.unsplash.com/photo-1594824813511-583594191630?auto=format&fit=crop&w=600&q=80",
            degrees: "MD Pediatrics, FAAP (Stanford University)",
            bio: "Dedicated to neonatal critical intensive therapy, pediatric developmental neurology, and preventive child immunization."
        },
        {
            id: 4,
            name: "Dr. Jonathan Reyes, MD",
            specialty: "orthopedics",
            specialtyName: "Orthopedic & Joint Specialist",
            experience: "17+ Years Experience",
            rating: 4.93,
            reviewsCount: 295,
            availability: "Mon, Tue, Thu (11AM - 4PM)",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
            degrees: "MD Ortho, FRCS (Mayo Clinic Fellow)",
            bio: "Pioneer in robotic total knee and hip replacement, arthroscopic multi-ligament knee repair, and cartilage regeneration."
        },
        {
            id: 5,
            name: "Dr. Aisha Patel, MD",
            specialty: "oncology",
            specialtyName: "Lead Medical Oncologist",
            experience: "15+ Years Experience",
            rating: 4.97,
            reviewsCount: 210,
            availability: "Wed, Thu, Fri (10AM - 3PM)",
            image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",
            degrees: "MD, DM Medical Oncology (Columbia University)",
            bio: "Authority in precision molecular oncology, targeted monoclonal antibodies, immunotherapy, and breast cancer therapeutics."
        },
        {
            id: 6,
            name: "Dr. David Sterling, MD",
            specialty: "emergency",
            specialtyName: "Trauma & Emergency Director",
            experience: "18+ Years Experience",
            rating: 4.98,
            reviewsCount: 450,
            availability: "24/7 Trauma Command",
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
            degrees: "MD Emergency Medicine, FACEP (UCLA)",
            bio: "Directs our Level 1 Trauma Center with mastery in critical airway resuscitation, disaster management, and poly-trauma triage."
        },
        {
            id: 7,
            name: "Dr. Rachel Greenburg, MD",
            specialty: "cardiology",
            specialtyName: "Consultant Electrophysiologist",
            experience: "12+ Years Experience",
            rating: 4.89,
            reviewsCount: 165,
            availability: "Tue, Thu (9AM - 1PM)",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            degrees: "MD, FHRS (University of Pennsylvania)",
            bio: "Specializes in cardiac arrhythmias, 3D mapping radiofrequency catheter ablation, and leadless pacemaker implantation."
        },
        {
            id: 8,
            name: "Dr. Kenneth Adams, MS",
            specialty: "orthopedics",
            specialtyName: "Spine & Sports Medicine Surgeon",
            experience: "13+ Years Experience",
            rating: 4.92,
            reviewsCount: 190,
            availability: "Mon, Wed, Sat (1PM - 6PM)",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
            degrees: "MS Ortho, FAAOS (Cleveland Clinic)",
            bio: "Expert in minimally invasive keyhole lumbar discectomy, scoliosis correction, and elite athlete sports injury restoration."
        }
    ],

    packages: [
        {
            id: "essential",
            name: "Essential Health Wellness",
            price: "$149",
            duration: "Half-day screen",
            popular: false,
            desc: "Designed for annual wellness assessment and vital organ baseline biochemical evaluation.",
            tests: [
                "Complete Blood Count (CBC) with ESR (24 parameters)",
                "Fasting & Post-Prandial Blood Glucose Profile",
                "Complete Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)",
                "Kidney Function Test (Serum Urea, Creatinine, Uric Acid)",
                "Liver Function Profile (Bilirubin, SGOT, SGPT, Alkaline Phosphatase)",
                "12-Lead Resting Digital Electrocardiogram (ECG)",
                "Comprehensive Consultation with Senior Physician"
            ]
        },
        {
            id: "cardiac",
            name: "Comprehensive Heart & Vascular",
            price: "$299",
            duration: "Single-day screen",
            popular: true,
            desc: "Gold-standard cardiovascular risk screening, treadmill stress testing, and echocardiography.",
            tests: [
                "All parameters in Essential Health Wellness",
                "Color Doppler 2D Echocardiography (Echo)",
                "Computerized Treadmill Stress Test (TMT)",
                "High-Sensitivity C-Reactive Protein (hs-CRP Cardiac Risk)",
                "Serum Homocysteine & Electrolytes (Na, K, Cl)",
                "High-Definition Digital Chest X-Ray PA View",
                "Consultation & Lifestyle Risk Profiling with Senior Cardiologist"
            ]
        },
        {
            id: "executive",
            name: "Executive Whole-Body Screen",
            price: "$499",
            duration: "Full-day comprehensive",
            popular: false,
            desc: "Complete head-to-toe clinical evaluation including ultrasound, cancer tumor markers, and lungs.",
            tests: [
                "All parameters included in Cardiac Package",
                "High-Resolution Whole Abdomen & Pelvic Ultrasound (USG)",
                "Pulmonary Function Test (PFT Spirometry)",
                "Thyroid Diagnostic Panel (T3, T4, Ultrasensitive TSH)",
                "Cancer Screening Markers (PSA for Men / Pap Smear & Mammogram for Women)",
                "Vitamin D3, Vitamin B12, & Calcium Levels",
                "Dedicated Dietary, Nutritional & Preventive Counseling Session"
            ]
        }
    ],

    gallery: [
        {
            title: "Robotic Surgery Operating Suite",
            dept: "Surgical Center",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "3T High-Field MRI Scanner",
            dept: "Radiology & Imaging",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "Modular Intensive Care Unit",
            dept: "Critical Care",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "Level III Neonatal Intensive Care",
            dept: "Pediatric Ward",
            image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "Automated Molecular Pathology",
            dept: "Diagnostic Laboratories",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "Cardiac Catheterization Angio Lab",
            dept: "Cardiology",
            image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "GPS Connected Mobile ICU Ambulance",
            dept: "Emergency Fleet",
            image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=700&q=80"
        },
        {
            title: "Modern Outpatient Lobby",
            dept: "Patient Experience",
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80"
        }
    ],

    blogs: [
        {
            title: "Recognizing Early Warning Signs of Stroke: The F.A.S.T Protocol",
            category: "Neurology",
            date: "Oct 12, 2026",
            author: "Dr. Marcus Vance",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
            summary: "Time is brain tissue. Learn how rapid recognition within the 3-hour golden window can reverse neurological deficits."
        },
        {
            title: "Advances in Robotic Knee Replacement: Walk Within 24 Hours",
            category: "Orthopedics",
            date: "Oct 08, 2026",
            author: "Dr. Jonathan Reyes",
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
            summary: "How 3D computed CT mapping and sub-millimeter robotic arm precision achieve rapid post-operative recovery."
        },
        {
            title: "Preventing Cardiovascular Disease in Your 30s and 40s",
            category: "Cardiology",
            date: "Sep 28, 2026",
            author: "Dr. Elena Rostova",
            image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
            summary: "Proactive screening guidelines, lipid management, coronary calcium scoring, and heart-healthy lifestyle choices."
        }
    ],

    testimonials: [
        {
            name: "Robert Callahan",
            role: "Cardiac Surgery Patient",
            quote: "The cardiology team at PulseCare literally saved my life. Dr. Elena Rostova and the ICU nurses treated me like family from emergency intake to full recovery.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            badge: "Verified Patient"
        },
        {
            name: "Samantha Wright",
            role: "Mother of Pediatric Patient",
            quote: "The pediatric ward is comforting, colorful, and peaceful. Dr. Sarah Chen was extraordinarily patient and compassionate with my 4-year-old daughter.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
            badge: "Pediatric Care"
        },
        {
            name: "Michael Ramirez",
            role: "Robotic Knee Replacement",
            quote: "I was walking with support just 24 hours after my robotic knee replacement. The physiotherapy team and Dr. Reyes are world class. Highly recommended!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
            badge: "Joint Replacement"
        }
    ],

    insurancePartners: [
        { name: "BlueCross BlueShield", icon: "fa-shield-halved" },
        { name: "Aetna Healthcare", icon: "fa-heart-circle-check" },
        { name: "UnitedHealthcare", icon: "fa-hospital" },
        { name: "Cigna Health Care", icon: "fa-circle-check" },
        { name: "Humana Health", icon: "fa-stethoscope" },
        { name: "Kaiser Permanente", icon: "fa-user-nurse" }
    ],

    faqs: [
        {
            q: "How do I schedule an outpatient appointment?",
            a: "You can book directly using our online booking form on this website, call our dedicated appointment desk at +1 (800) 555-0199, or walk into the front triage lobby between 8:00 AM and 8:00 PM."
        },
        {
            q: "What insurance plans and cashless policies are accepted?",
            a: "PulseCare Hospital is paneled with all major insurance providers, HMOs, PPOs, and government healthcare schemes. Our Insurance Helpdesk assists with instant cashless pre-authorization 24/7."
        },
        {
            q: "What is your emergency admission process?",
            a: "Our Level 1 Trauma & Emergency Unit is open 24/7/365. Patients arriving by ambulance or personal vehicle are immediately received at the red triage bay with zero admission waiting delay."
        },
        {
            q: "Can I access my lab reports and imaging scans online?",
            a: "Yes! Patients receive a secure SMS and email link with encrypted access to download blood test results, digital X-rays, MRI, and CT scans through our Patient Portal within hours."
        },
        {
            q: "What are your inpatient visiting hours?",
            a: "General wards visiting hours are from 4:00 PM to 7:00 PM daily. ICU visitation is restricted to designated family members between 11:00 AM - 12:00 PM and 5:00 PM - 6:00 PM to maintain sterile infection control."
        }
    ],

    leaders: [
        {
            name: "Dr. Arthur Pendelton, MD",
            role: "Chief Executive Officer & Medical Director",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
            bio: "Former Harvard clinical fellow with 28+ years steering leading international healthcare organizations and hospital safety boards."
        },
        {
            name: "Dr. Marianne Foster, MS, FRCS",
            role: "Director of Clinical Governance & Surgery",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
            bio: "Pioneer in minimal access robotic surgery and author of over 50 global surgical peer-reviewed publications."
        },
        {
            name: "David K. Vance, MBA",
            role: "Chief Operating Officer & Patient Experience",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
            bio: "Dedicated to human-centered hospital administration, digital patient admission triage, and patient satisfaction standards."
        }
    ]
};

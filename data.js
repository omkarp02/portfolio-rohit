const data = {
    hero: {
      titleLineOne: "Hello I'm Rohit,",
      titleLineTwo: "Data Analyst",
      titleLineThree: "based in India",
      description:
        "I'm a Data Analyst and a data enthusiast by heart. I have more than 1 year of experience in Data Domain. I have completed many projects. I have worked on data pre-processing as well geo analysis in my current organization .",
      buttonText: "GET IN TOUCH",
    },
    experience: {
      heading: "Work Experience",
      subHeading: "What I have done so far",
      data: [
        {
          position: "Spatial Data Specialist 1",
          company: "Here Technology",
          points: [
            "Developing and maintaining Mapping Data using ArcGIS Pro, SQL,QGIS and other related technologies.",
            "Worked as Data Specialist and Quality Analyst",
            "Led a team of six developer as SME for Data extracting, Data cleaning and Data merging.",
            "Participating in project reviews and providing constructive feedback to other developers.",
          ],
          companyLogo: "/Here.jpg",
          date: "August 2022 - Present",
        },
       
      ],
    },
    technology: {
      heading: "Technologies",
      technology: [
        { label: "SQL", value: 4 },
        { label: "Excel", value: 3 },
        { label: "ArcGis Pro", value: 4 },
        { label: "QGIS", value: 4 },
        { label: "Azure", value: 3 },
        { label: "Power BI", value: 3 },
        { label: "Tableau", value: 3 },
        
      ],
    },
    project: {
      heading: "Project",
      description:
        "Following are my personal projects build during academic years which showcases my skills which are based on kaggle datasets, which I developed during my college period. Each project is briefly described with image. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
      work: [
        {
          heading: "Covid 19 Analysis",
          description: `In Covid 19 Analysis, I have performed analysis on World Health Organization's Covid Pandamic data.
            an dashboard that simplifies Death count,Infected Population as well as Infection forecast.
           `,
          img: "/Covid.png",
          link: "https://public.tableau.com/app/profile/rohit.pawar8259/viz/COVIDINDIA_16559714564350/Dashboard1",
        },
        {
          heading: "Customer Analysis",
          description: `Developed Customer Analysis Dashboard based on Kaggle Customer dataset.`,
          img: "/Customer Analysis.jpeg",
          link: "https://public.tableau.com/app/profile/rohit.pawar8259/viz/Book2_16484567071610/Dashboard1",
        },
       
      ],
    },
    testimonial: {
      heading: "Testimonial",
      img: [],
      review: [
       
      ],
      reviewerName: [],
      reviewerDesignation: [],
    },
    email: "rohitpdata@gmail.com",
    name: "Rohit Pawar",
  };
  
  export default data;
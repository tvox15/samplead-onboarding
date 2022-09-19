export const pages = [
    {
        template: "WelcomePage",
        inputHeader: "Welcome!",
        subheaderText: "Before we start, our AI needs to get to know you, your business, and your goals. This may take a couple of minutes.",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Full Name",
        inputKey: "fullName",
        progressBarText: "Personal Info 1/4",
        progressBarFill: "25%",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Company Name",
        inputKey: "companyName",
        progressBarText: "Personal Info 2/4",
        progressBarFill: "50%",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Work Email",
        inputKey: "workEmail",
        progressBarText: "Personal Info 3/4",
        progressBarFill: "75%",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Company Website",
        inputKey: "companyWebsite",
        progressBarText: "Personal Info 4/4",
        progressBarFill: "100%",
    },
    {
        // Targets to track
        template: "CheckboxInputTemplate",
        inputHeader: "Let's start with the fun part- what would you like us to track?",
        inputKey: "trackingTargets",
        custom_options: false,
        options: ["Job change", "News articles", "Linkedin groups", "Linkedin posts", "Linkedin events", "Medium activity", "Twitter tweets", "Funding event"],
        progressBarText: "Target 1/8",
        progressBarFill: "12%",
    }, 
    {
        // geolocations
        template: "GeolocationTemplate",
        options: ["Africa", "Asia", "Europe", "North America", "APAC", "DACH", "MENA", "South America", "APJ", "EMEA", "Nordics", "All"],
        progressBarText: "Target 2/8",
        progressBarFill: "25%",
    },
    {
            // companyHeadcount
        template: "CheckboxInputTemplate",
        inputHeader: "Company headcount of your target audience",
        inputKey: "companyHeadcount",
        custom_options: false,
        options: ["Self employed", "1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10000+"],
        progressBarText: "Target 3/8",
        progressBarFill: "37%",
    },
    {
            // targetIndustries
        template: "CheckboxInputTemplate",
        inputHeader: "Industries you aim to target",
        inputKey: "targetIndustries",
        custom_options: true,
        options: ["Cyber Security", "Hi-tech", "B2B SAAS", "Fintech", "Internet", "B2B Software", "B2B Hardware", "Marketing", "Libraries"],
        progressBarText: "Target 4/8",
        progressBarFill: "50%",
    },

    {
        // targetTitles
        template: "TargetTitlesPage",
        inputHeader: "Target titles",
        inputKey: "targetTitles",
        subheaderText: "For example: VP of Technology",
        addText: "+ add another target title",
        input_limit: 5,
        placeholder: "Title",
        progressBarText: "Target 5/8",
        progressBarFill: "62%",
    },

    // seniorityLevel
    {
        template: "CheckboxInputTemplate",
        inputHeader: "Seniority Level",
        inputKey: "seniorityLevel",
        custom_options: false,
        options: ["Owner", "Partner", "CXO", "VP", "Director", "Manager", "Senior", "Entry", "Training"],
        progressBarText: "Target 6/8",
        progressBarFill: "75%",
    },

    // functionOfTargetRole
    {
        template: "CheckboxInputTemplate",
        inputHeader: "Function (Role of the person you are targeting)",
        inputKey: "functionOfTargetRole",
        custom_options: false,
        options: ["Finance", "Marketing", "Product", "Purchasing", "Engineering", "Operations", "Sales", "Education", "Media and Communication",
            "Program Management", "Project Management", "Human resources", "Entrepreneurshiop", "Business Development", "Information Technology", "Arts and Design"],
            progressBarText: "Target 7/8",
            progressBarFill: "87%",
    },
    // targetPersonaDescription
    {
        template: "SingleInputTemplate",
        inputHeader: "Target persona description",
        inputKey: "targetPersona",
        subheaderText: 'For example: "We are targeting HR decision makers in the united states that manage employee experience..."',
        progressBarText: "Target 8/8",
        progressBarFill: "100%",
    },

    {
        // competitors
        template: "MultipleInputTemplate",
        inputHeader: "Competitors",
        inputKey: "competitors",
        subheaderText: "List 3 competitors (Linkedin page URL)",
        addText: "+ add another competitor",
        input_limit: 3,
        placeholder: "Competitor",
        progressBarText: "Past Experience 1/8",
        progressBarFill: "12%",
    },
    {
        // linkedinProfiles
        template: "MultipleInputTemplate",
        inputHeader: "Linkedin profiles",
        inputKey: "linkedinProfiles",
        subheaderText: "Link to LinkedIn profile of existing customers who fit target audience",
        addText: "+ add another link",
        input_limit: 6,
        placeholder: "Link",
        progressBarText: "Past Experience 2/8",
        progressBarFill: "25%",
    },
    {
        // linkedinGroups 
        template: "MultipleInputTemplate",
        inputHeader: "Linkedin groups",
        inputKey: "linkedinGroups",
        subheaderText: "",
        addText: "+ add another group",
        input_limit: 6,
        placeholder: "Link to group",
        progressBarText: "Past Experience 3/8",
        progressBarFill: "37%",
    },
    {
        // perfectCustomers 
        template: "MultipleInputTemplate",
        inputHeader: '"Perfect" customers',
        inputKey: "perfectCustomers",
        subheaderText: 'List 3 companies you define as your "perfect" customers',
        addText: "+ add another company",
        input_limit: 3,
        placeholder: "Company",
        progressBarText: "Past Experience 4/8",
        progressBarFill: "50%",
    },
    {
        // keyWords 
        template: "MultipleInputTemplate",
        inputHeader: "Key words",
        inputKey: "keywords",
        subheaderText: "Your product's top 5 key words",
        addText: "+ add another keyword",
        input_limit: 5,
        placeholder: "Keyword",
        progressBarText: "Past Experience 5/8",
        progressBarFill: "62%",
    },
    {
        // influencers 
        template: "MultipleInputTemplate",
        inputHeader: "Influencers",
        inputKey: "influencers",
        subheaderText: "List 5 influencers in your field",
        addText: "+ add another influencer",
        input_limit: 5,
        placeholder: "Influencer",
        progressBarText: "Past Experience 6/8",
        progressBarFill: "75%",
    },
    {  // hashtags 
        template: "MultipleInputTemplate",
        inputHeader: "#",
        inputKey: "hashtags",
        subheaderText: "Provide 5 related #hashtags for your product",
        addText: "+ add another hashtag",
        input_limit: 5,
        placeholder: "Hashtag",
        progressBarText: "Past Experience 7/8",
        progressBarFill: "88%",
    },
    {   
         // marketingMaterials: file upload
        template: "MarketingMaterialsPage",
        progressBarText: "Past Experience 8/8",
        progressBarFill: "100%",
    }
]
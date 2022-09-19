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
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Company Name",
        inputKey: "companyName",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Work Email",
        inputKey: "workEmail",
    },
    {
        template: "SingleInputTemplate",
        inputHeader: "Company Website",
        inputKey: "companyWebsite",
    },
    {
        // Targets to track
        template: "CheckboxInputTemplate",
        inputHeader: "Let's start with the fun part- what would you like us to track?",
        inputKey: "trackingTargets",
        custom_options: false,
        options: ["Job change", "News articles", "Linkedin groups", "Linkedin posts", "Linkedin events", "Medium activity", "Twitter tweets", "Funding event"]
    }, 
    {
        // geolocations
        template: "GeolocationTemplate",
        options: ["Africa", "Asia", "Europe", "North America", "APAC", "DACH", "MENA", "South America", "APJ", "EMEA", "Nordics", "All"]
    },
    {
            // companyHeadcount
        template: "CheckboxInputTemplate",
        inputHeader: "Company headcount of your target audience",
        inputKey: "companyHeadcount",
        custom_options: false,
        options: ["Self employed", "1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10000+"],
    },
    {
            // targetIndustries
        template: "CheckboxInputTemplate",
        inputHeader: "Industries you aim to target",
        inputKey: "targetIndustries",
        custom_options: true,
        options: ["Cyber Security", "Hi-tech", "B2B SAAS", "Fintech", "Internet", "B2B Software", "B2B Hardware", "Marketing", "Libraries"],
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
    },

    // seniorityLevel
    {
        template: "CheckboxInputTemplate",
        inputHeader: "Seniority Level",
        inputKey: "seniorityLevel",
        custom_options: false,
        options: ["Owner", "Partner", "CXO", "VP", "Director", "Manager", "Senior", "Entry", "Training"]
    },

    // functionOfTargetRole
    {
        template: "CheckboxInputTemplate",
        inputHeader: "Function (Role of the person you are targeting)",
        inputKey: "functionOfTargetRole",
        custom_options: false,
        options: ["Finance", "Marketing", "Product", "Purchasing", "Engineering", "Operations", "Sales", "Education", "Media and Communication",
            "Program Management", "Project Management", "Human resources", "Entrepreneurshiop", "Business Development", "Information Technology", "Arts and Design"]
    },
    // targetPersonaDescription
    {
        template: "SingleInputTemplate",
        inputHeader: "Target persona description",
        inputKey: "targetPersona",
        subheaderText: 'For example: "We are targeting HR decision makers in the united states that manage employee experience..."'
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
    },
    {  // hashtags 
        template: "MultipleInputTemplate",
        inputHeader: "#",
        inputKey: "hashtags",
        subheaderText: "Provide 5 related #hashtags for your product",
        addText: "+ add another hashtag",
        input_limit: 5,
        placeholder: "Hashtag",
    }
    // marketingMaterials: file upload


]
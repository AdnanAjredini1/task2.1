const data1 = [
    {
      title: "Domain A",
      price: "$10",
      paragraph: "Instead of $15.99"
    },
    {
      title: "Domain B",
      price: "$12",
      paragraph: "Instead of $16.99 ."
    },
    {
      title: "Domain C",
      price: "$15",
      paragraph: "Instead of $25.99 ."
    },
    {
      title: "Domain D",
      price: "$20",
      paragraph: "Instead of $25.99 ."
    },
    {
      title: "Domain E",
      price: "$25",
      paragraph: "Instead of $28.50 ."
    },
    {
      title: "Domain F",
      price: "$30",
      paragraph: "Instead of $40"
    },
    {
      title: "Domain G",
      price: "$35",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Domain H",
      price: "$40",
      paragraph: "+"
    }
  ];

  const data2 = [
    {
      title: "Basic ",
      price: "$5 per month",
      paragraph: "Instead of $15.99"
    },
    {
      title: "Standard",
      price: "$10 per month",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Premium ",
      price: "$15 per month",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Business ",
      price: "$20 per month",
      paragraph: "Instead of $25.99"
    },
    {
      title: "Enterprise",
      price: "$30 per month",
      paragraph: "Instead of $41"
    },
    {
      title: "Professional",
      price: "$40 per month",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Ultimate",
      price: "$50 per month",
      paragraph: "Instead of $45.99."
    },
    {
      title: "Custom ",
      price: "Contact us",
      paragraph: "Customize."
    }
  ];
  
  const data3 = [
    {
      title: "Entry-Level Server",
      price: "$100 per month",
      paragraph: "Instead of $45.99."
    },
    {
      title: "Standard Server",
      price: "$150 per month",
      paragraph: "Instead of $175.99"
    },
    {
      title: "Advanced Server",
      price: "$200 per month",
      paragraph: "Instead of $455.99"
    },
    {
      title: "High-Performance ",
      price: "$250 per month",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Enterprise Server",
      price: "$300 per month",
      paragraph: "Instead of $45.99Instead of $480.99"
    },
    {
      title: "Custom Server",
      price: "Contact us",
      paragraph: "Instead of $45.99"
    },
    {
      title: "Managed Server",
      price: "$350 per month",
      paragraph: "Instead of $459.99"
    },
    {
      title: "Dedicated Cloud ",
      price: "$400 per month",
      paragraph: "A dedicated cloud server ."
    }
  ];
  
  const data4 = [
    {
      title: "Small Instance",
      price: "$50 per month",
      paragraph: "Instead of $70.99."
    },
    {
      title: "Medium Instance",
      price: "$75 per month",
      paragraph: "A medium virtual cloud instance with balanced resources for general use."
    },
    {
      title: "Large Instance",
      price: "$100 per month",
      paragraph: "A large virtual cloud instance with enhanced performance for demanding tasks."
    },
    {
      title: "Extra Large Instance",
      price: "$150 per month",
      paragraph: "An extra-large instance providing high resources for intensive workloads."
    },
    {
      title: "Premium Instance",
      price: "$200 per month",
      paragraph: "A premium instance with top-tier resources and additional features."
    },
    {
      title: "Custom Instance",
      price: "Contact us",
      paragraph: "Customize your virtual cloud instance to meet specific requirements."
    },
    {
      title: "Managed Cloud",
      price: "$250 per month",
      paragraph: "Managed cloud services with full support and maintenance."
    },
    {
      title: "High-Availability Cloud",
      price: "$300 per month",
      paragraph: "A high-availability cloud solution with redundancy and reliability."
    }
  ];
  
  const data5 = [
    {
      title: "Basic WordPress",
      price: "$5 per month",
      paragraph: "Perfect for personal blogs."
    },
    {
      title: "Standard WordPress",
      price: "$10 per month",
      paragraph: "Includes extra themes and plugins."
    },
    {
      title: "Pro WordPress",
      price: "$15 per month",
      paragraph: "Enhanced speed and security."
    },
    {
      title: "Business WordPress",
      price: "$25 per month",
      paragraph: "Ideal for small businesses."
    },
    {
      title: "Premium WordPress",
      price: "$35 per month",
      paragraph: "Advanced features for power users."
    },
    {
      title: "Enterprise WordPress",
      price: "$50 per month",
      paragraph: "Built for high-traffic sites."
    },
    {
      title: "Managed WordPress",
      price: "$75 per month",
      paragraph: "Fully managed with priority support."
    },
    {
      title: "Custom WordPress",
      price: "Contact us",
      paragraph: "Tailor-made solutions for unique needs."
    }
  ];
  
  const data6 = [
    {
      title: "Basic Email",
      price: "$2 per month",
      paragraph: "Secure email for personal use."
    },
    {
      title: "Standard Email",
      price: "$5 per month",
      paragraph: "Professional email with more storage."
    },
    {
      title: "Business Email",
      price: "$10 per month",
      paragraph: "Custom domain emails for teams."
    },
    {
      title: "Enterprise Email",
      price: "$20 per month",
      paragraph: "Advanced features and analytics."
    },
    {
      title: "Premium Email",
      price: "$30 per month",
      paragraph: "Includes priority support and encryption."
    },
    {
      title: "Custom Email",
      price: "Contact us",
      paragraph: "Custom solutions for enterprise needs."
    },
    {
      title: "Email Suite",
      price: "$50 per month",
      paragraph: "Complete email and productivity suite."
    },
    {
      title: "Email Archive",
      price: "$5 per month",
      paragraph: "Secure email archiving solution."
    }
  ];
  
  const data7 = [
    {
      title: "VPS Starter",
      price: "$10 per month",
      paragraph: "Basic VPS with essential features."
    },
    {
      title: "VPS Pro",
      price: "$20 per month",
      paragraph: "Enhanced performance for businesses."
    },
    {
      title: "VPS Premium",
      price: "$40 per month",
      paragraph: "Top-tier resources and support."
    },
    {
      title: "VPS Business",
      price: "$30 per month",
      paragraph: "Ideal for e-commerce websites."
    },
    {
      title: "VPS Enterprise",
      price: "$50 per month",
      paragraph: "Advanced VPS for large organizations."
    },
    {
      title: "Managed VPS",
      price: "$70 per month",
      paragraph: "Fully managed VPS services."
    },
    {
      title: "Custom VPS",
      price: "Contact us",
      paragraph: "Tailor your VPS to specific needs."
    },
    {
      title: "VPS Cluster",
      price: "$100 per month",
      paragraph: "Scalable VPS cluster solutions."
    }
  ];
  
  const data8 = [
    {
      title: "Free Plan A",
      price: "$0 per month",
      paragraph: "Basic features with ads."
    },
    {
      title: "Free Plan B",
      price: "$0 per month",
      paragraph: "More storage and bandwidth."
    },
    {
      title: "Free Plan C",
      price: "$0 per month",
      paragraph: "Includes subdomain hosting."
    },
    {
      title: "Free Plan D",
      price: "$0 per month",
      paragraph: "Limited support and features."
    },
    {
      title: "Free Plan E",
      price: "$0 per month",
      paragraph: "Suitable for hobby projects."
    },
    {
      title: "Free Plan F",
      price: "$0 per month",
      paragraph: "Basic website builder included."
    },
    {
      title: "Free Plan G",
      price: "$0 per month",
      paragraph: "Ad-supported with limited resources."
    },
    {
      title: "Free Plan H",
      price: "$0 per month",
      paragraph: "Community support only."
    }
  ];

  export default{
   data1,
   data2,
   data3,
   data4,
   data5,
   data6,
   data7,
   data8
  }
  
  
  
  
  
  
  
  
  
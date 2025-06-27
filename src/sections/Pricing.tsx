import CheckIcon from "../../assets/check.svg";
import { twMerge } from "tailwind-merge";


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "20GB storage",
      "Integration",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integration",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integration",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export Capabilities",
      "API Access",
      "Advanced Security Features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
      <div className="section-heading">  
        <h2 className="section-title mt-5">Pricing</h2>
        <p className="flex justify-center section-description mt-5">
          Free Forever. Upgrade for unlimited tasks, better security, and exclusive features
        </p>
      </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={twMerge(
                "card",
                tier.inverse && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between items-center">
                <h3 className={`text-lg font-bold ${tier.inverse ? 'text-white/60' : 'text-black/50'}`}>
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-orange-300 bg-gradient-to-r from-orange-400 to-orange-600">
                    <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] via-[#BBCB92] via-[#71C2EF] to-[#DD7DDF] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className={`flex items-baseline gap-1 mt-[30px] ${tier.inverse ? 'text-white' : 'text-black'}`}>
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${tier.monthlyPrice}
                </span>
                <span className={`tracking-tight font-bold ${tier.inverse ? 'text-white/50' : 'text-black/50'}`}>
                  /month
                </span>
              </div>

              <button className={`btn primary w-full mt-[30px]  ${tier.inverse ? 'bg-white' : 'text-black'}`}>
                {tier.buttonText}
              </button>

              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, index) => (
                  <li 
                    className={`text-sm flex items-center gap-4 ${tier.inverse ? 'text-white/80' : 'text-black'}`} 
                    key={index}
                  >
                    <img src={CheckIcon} alt="Check" className="w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// I WILL LEAVE OLD CODE BELOW INCASE YOU NEED TO PICK SOMETHING OR REFERNCE ANYTHING FROM IT.
// TO UNCOMMENT IT (REMOVE THE GREEN COLOR), JUST HIGHLIGHT AND PRESS CTRL + /   
//(REMEMBER TO COMMENT WITH SAME COMMAND THE OTHER PART TOO SO IT DOESNT CONFLICT)

// import CheckIcon from "../../assets/icons/check.svg";
// import { twMerge } from "tailwind-merge";


// const pricingTiers = [
//   {
//     title: "Free",
//     monthlyPrice: 0,
//     buttonText: "Get started for free",
//     popular: false,
//     inverse: false,
//     features: [
//         "Up to 5 project members",
//         "Unlimited  tasks and projects",
//         "20GB storage",
//         "Intergration",
//         "Basic support",        
//     ],
//   },
//   {
//     title: "Pro",
//     monthlyPrice: 9,
//     buttonText: "Sign up now",
//     popular: true,
//     inverse: true,
//     features: [
//         "Up to 50 project members",
//         "Unlimited  tasks and projects",
//         "50GB storage",
//         "Intergration",
//         "Priority support",
//         "Advanced support",
//         "Export support",         
//     ],
//   },
//   {
//    title: "Business",
//    monthlyPrice: 19,
//    buttonText: "Sign up now",
//    popular: true,
//    inverse: true,
//    features: [
//         "Up to 50 project members",
//         "Unlimited  tasks and projects",
//         "200GB storage",
//         "Intergration",
//         "Dedicated account manager",
//         "Custom fields",
//         "Advanced analytics",
//         "Export Capabilities",
//         "API Access",
//         "Advanced Security Features",       
//   ],
//   },
// ];

// export const Pricing = () => { 
//   return ( 
//     <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]"> 
//       <div className="container"> 
//         <h3 className="section-title mt-5">Pricing</h3> 
//         <p className="sectiion-description mt-5"> 
//           Free Forever. Upgrade for unlimited tasks, better security, and exclusive features 
//         </p> 
//         <div className={twMerge("p-10 border border-[#F1F1F1] border-black rounded-3xl shadow-[0_7px_14px_#EAEAEA] grid grid-cols-1 md:grid-cols-3 gap-10", inverse === true && 'border-black text-white/60' )}> Free
//           {pricingTiers.map((tier) => ( 
//             <div key={tier.title}> 
//             <div className="text-lg font-bold text-black/50">
//             </div>

//             { tier.popular === true && (
//               <>
//               <h3>{tier.title}</h3> 
//               <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">Popular</div>
//               <span className="bg-[linear-gradent(to_right,#DD7DDF, #E1CD86, #BBCB92, #71C2EFFFF, #DD7DDF)] text-transparent bg-clip-text font-medium">
//                 Popular
//                 </span>
//               </>
//             )}

//               <div className={`flex items-baseline gap-1 mt-[30px] ${tier.inverse ? 'text-white' : 'text-black'}`}> 
//                 <span className="text-4xl font-bold tracking-tighter leading-none">${tier.monthlyPrice}</span> 
//                 <span className="tracking-tight font-bold text-black/50">/month</span> 
//               </div> 
//               <button className="btn primary w-full mt-[30px]">{tier.buttonText}</button>
//               <ul className="flex flex-col gap-5 mt-8">
//                 {tier.features.map((feature, index) => (
//                   <li className="text-sm flex items-center gap-4" key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div> 
//           ))} 
//         </div> 
//       </div> 
//     </section> 
//   ); 
// };
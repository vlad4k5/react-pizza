import ContentLoader from "react-content-loader"

const FakePizzaBlock = () => {
   return window.innerWidth > 600 ? <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
  >
    <rect x="534" y="113" rx="0" ry="0" width="88" height="71" /> 
    <rect x="573" y="182" rx="10" ry="10" width="150" height="90" /> 
    <rect x="572" y="244" rx="3" ry="3" width="150" height="15" /> 
    <rect x="577" y="251" rx="3" ry="3" width="90" height="15" /> 
    <rect x="576" y="248" rx="8" ry="8" width="80" height="25" /> 
    <rect x="564" y="515" rx="8" ry="8" width="32" height="32" /> 
    <circle cx="135" cy="125" r="125" /> 
    <rect x="40" y="270" rx="5" ry="5" width="200" height="24" /> 
    <rect x="0" y="310" rx="10" ry="10" width="280" height="84" /> 
    <rect x="5" y="420" rx="5" ry="5" width="90" height="30" /> 
    <rect x="125" y="410" rx="20" ry="20" width="150" height="45" />
  </ContentLoader> : null
}
export default FakePizzaBlock
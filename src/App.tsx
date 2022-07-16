import './App.css'
import BusinessCard from "./components/BusinessCard/BusinessCard";
function App() {

  return (
    <div className="App" id="application">
      <BusinessCard emailPrimary/>
    <BusinessCard
        name="Lt. Commander Cuckleburry"
        portraitSrc="http://www.fillmurray.com/300/300"
        interests= " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda aut culpa cum deserunt earum enim expedita facere facilis incidunt inventore ipsa ipsam, laborum maiores minus modi molestias neque provident quia quisquam quo quos, tempora temporibus veniam, vero vitae voluptate. Atque autem delectus deleniti ducimus eaque eius magnam omnis optio provident soluta. A ab architecto autem beatae blanditiis consectetur culpa, dolor dolore, eaque fuga id illum impedit in iusto laudantium magnam minus natus nemo nobis nulla odio officiis optio pariatur quod rerum soluta veritatis voluptas? A autem eos molestias odit quidem vitae. Ad aperiam at earum iste molestiae quia, soluta?"
        emailPrimary
        instagram="https://www.instagram.com/billmurraypics/?hl=en"
    />
    </div>

  )
}

export default App

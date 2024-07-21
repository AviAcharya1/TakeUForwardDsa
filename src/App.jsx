import Card from "./components/Card.jsx";
  
export default function App() { 
    return ( 
        <div className="bg-black"> 
            <div className="flex flex-col justify-center items-center"> 
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-yellow-500 font-bold text-3xl text-shadow mt-20"> 
                    DSA LEARNING ESSENTIAL
                </h1> 
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 font-bold text-xl mt-8 mb-4"> 
                    DSA TRACKER 
                </h3> 
                <Card /> 
            </div> 
        </div> 
    ); 
}
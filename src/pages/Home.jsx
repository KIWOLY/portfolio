import StarBackground from "../components/StarBackGround"
import ThemeToggle from "../components/Theme"

function Home(){
    return(
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
         <ThemeToggle/>


        {/* Background Effects */}
        <StarBackground/>

        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}
        </div>
        </>
    )
}
export default Home 
// routing
import Routes from './routes'

//project imports
import Locales from './ui-component/Locales'
import Snackbar from 'src/ui-component/extended/Snackbar';
import NavigationScroll from './layout/NavigationScroll'
import ThemeCustomization from './themes'

function App() {    
    return (
        <ThemeCustomization>
            <Locales>
                <NavigationScroll>
                    <>
                        <Routes />
                        <Snackbar />
                    </>
                </NavigationScroll>
            </Locales>
        </ThemeCustomization>         
    )
}

export default App

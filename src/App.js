import Button from "./Button";
import { GoBell, GoCloudDownload } from 'react-icons/go';

function App() {

    const handleClick = () => {
        console.log('Click!');
    };

    return <div>
        <div>
            <Button secondary outline rounded onClick={handleClick}>
                <GoBell />
                Click me!!
                </Button>
        </div>
        <div>
            <Button danger outline>
            <GoCloudDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>
            <GoCloudDownload />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary>    
            <GoCloudDownload />
            Hide Ads!
            </Button>
        </div>
        <div>
            <Button primary rounded>
            <GoCloudDownload />
                Something!
            </Button>
        </div>
    </div>;
}

export default App;
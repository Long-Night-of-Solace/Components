import { Button, CustomColoredButton, DeleteButton } from '../components/ButtonSC';
import { GoBell, GoCloudDownload } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        console.log('Clicked!');
      };
    
      return (
        <div>
          <div>
            <Button 
            $primary
            onClick={handleClick}
            >
              <GoCloudDownload />
              Buy Now!
            </Button>
          </div>
          <div>
            <Button 
            $secondary
            $rounded
            onMouseEnter={handleClick}
            >
              <GoBell />
              Add to Cart!
            </Button>
          </div>
          <div>
            <DeleteButton
            onMouseLeave={handleClick}
            >
              Delete
            </DeleteButton>
          </div>
          <div>
            <CustomColoredButton 
            $primary
            onClick={handleClick}
            $color={'cyan'}
            >
              <GoCloudDownload />
              Buy Now!
            </CustomColoredButton>
          </div>
        </div>
      );
}

export default ButtonPage;
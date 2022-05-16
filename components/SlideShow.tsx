import { Box } from "grommet";
import { Carousel } from "grommet";
import Image from "next/image";
import example1 from '../photos/example1.jpg';
import example2 from '../photos/example2.jpg';
import example3 from '../photos/example3.jpg';
import example4 from '../photos/example4.jpg';
import example5 from '../photos/example5.jpg';
import example6 from '../photos/example6.jpg';

const SlideShow = () => {
    return (
        <div>
            <Box height='medium' width='medium' round='medium' overflow='hidden'>
                <Carousel fill play={4000}>
                    <Image alt="test" layout="fill" src={example1}/>
                    <Image alt="test" layout="fill" src={example2}/>
                    <Image alt="test" layout="fill" src={example3}/>
                    <Image alt="test" layout="fill" src={example4}/>
                    <Image alt="test" layout="fill" src={example5}/>
                    <Image alt="test" layout="fill" src={example6}/>
                </Carousel>
            </Box>
        </div>
    );
};

export default SlideShow;
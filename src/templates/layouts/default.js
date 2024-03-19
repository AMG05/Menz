import { Fragment, h } from 'preact';
import Skip from '@components/skip';
import Header from '@components/header';
import Main from '@components/main';
import Footer from '@components/footer';
import PrimaryNavigation from '@templates/components/navigation';
import SearchBar from '@templates/components/searchbar';


const Default = ({ children }) => <Fragment>
    <Header class="header">
        <Skip />
    </Header>
    
    <Main>
        { children }
    </Main>
    <Footer />
</Fragment>;

export default Default;
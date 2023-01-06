import { Component } from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { fetchData } from 'Services/Api';
import SearchBar from 'components/Searchbar';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
// import { Modal } from 'components/Modal/Modal';
// import { Loader } from 'components/Loader/Loader';
import Container from './App.styled';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: '',
    error: null,
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  render() {
    return (
            <Container>
        <SearchBar onSubmit={this.handleSearch} />

      </Container>
    );
  }
}

export default App;
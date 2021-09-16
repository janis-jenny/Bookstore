import BookList from '../containers/Booklist';
import BookForm from '../containers/Bookform';
import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar />
    <div>
      <BookList />
      <BookForm />
    </div>
  </div>
);

export default App;

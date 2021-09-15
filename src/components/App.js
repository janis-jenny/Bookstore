import BookList from '../containers/Booklist';
import BookForm from '../containers/Bookform';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <div>
      <BookForm />
      <BookList />
    </div>
  </>
);

export default App;

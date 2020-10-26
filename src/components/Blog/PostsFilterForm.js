import React,{useState,useRef} from 'react';
import PropTypes from 'prop-types';
PostsFilterForm.propTypes = {
    onSubmit: PropTypes.func,

};
PostsFilterForm.defaultProps = {
    onSubmit: null,
}
function PostsFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
      if (!onSubmit) return;
          //debounce
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        typingTimeoutRef.current =setTimeout(() => {
            const formValues = {
              searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);

    }

    return (
      <div className="blog__sidebar__search">
        <form>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchTermChange}/>
          
        </form>
      </div>
    );
}

export default PostsFilterForm;

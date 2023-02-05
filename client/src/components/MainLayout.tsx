import React from 'react';
import Fridge from './Fridge';
import Header from './Header';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const {
        storedIngredients,
        ingredients,
        addStoredIngredient,
        removeStoredIngredient,
        setStoreIngredient,
        setIngredients,
    } = useFridgeStore();

    const [query, setQuery] = useState('');

    useEffect(() => {
        if (localStorage.getItem('ingredients')?.length) {
            const stringifiendIngredients = localStorage.getItem('ingredients');
            // @ts-ignore
            setStoreIngredient(JSON.parse(stringifiendIngredients));
        }
    }, []);

    const getIngredientByKeyword = async (query: string) => {
        const ingredients = await fetchIngredientByKeyword(query);
        setIngredients(ingredients);
    };

    const debouncedGetIngredientByKeyword = useCallback(
        debounce(getIngredientByKeyword),
        []
    );

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            debouncedGetIngredientByKeyword(e.target.value);
        }
        setQuery(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem('ingredients', JSON.stringify(storedIngredients));
    }, [storedIngredients]);

    return (
        <div className='wrapper'>
            <Header />
            <div className='container'>{children}</div>

            <Fridge ingredients={ingredients} resultsList={ingredients} />
        </div>
    );
};

export default MainLayout;

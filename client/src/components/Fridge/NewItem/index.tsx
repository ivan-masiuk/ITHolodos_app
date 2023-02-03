import classNames from 'classnames';
import React from 'react';
import { CrossIcon, SearchIcon } from '../../../assets/images/icons';
import { IngredientI } from '../../../types/app';
import Button from '../../../UI/Button';
import './NewItem.scss';

interface NewItemProps {
    isVisible: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClose: () => void;
    value: string;
    resultsList: IngredientI[];
}

const NewItem: React.FC<NewItemProps> = ({
    isVisible,
    onChange,
    value,
    onClose,
}) => {
    return (
        <div
            className={classNames('NewItem', {
                visible: isVisible,
            })}
        >
            <div className='NewItem__wrapper'>
                <button className='NewItem__close' onClick={onClose}>
                    <CrossIcon />
                </button>
                <div className='NewItem__search'>
                    <input
                        className='NewItem__search-input'
                        onChange={onChange}
                        placeholder={'Find ingridient...'}
                        value={value}
                        type='search'
                    />
                    <Button className='NewItem__search-btn'>
                        Search <SearchIcon />
                    </Button>
                </div>
                <ul className='NewItem__list'>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                    <li className='NewItem__item'>
                        <div className='NewItem__item-info'>
                            <div className='NewItem__item-img'>
                                <img
                                    src='https://www.themealdb.com/images/ingredients/Chicken.png'
                                    alt='Photo'
                                />
                            </div>
                            <div className='NewItem__item-name'>Beef</div>
                        </div>
                        <Button className='NewItem__item-btn'>Add Item</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NewItem;
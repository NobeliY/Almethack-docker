import React from 'react';
import MySelcet from './UI/Select/MySelcet';
import MyInput from './UI/Input/MyInput';

const EventFilter = ({filter, setFilter}) => {
    return (
        <div className='container__input'>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Поиск"
            />
            <MySelcet
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: 'name', name: 'По названию' },
                    { value: 'type', name: 'По типу' },
                    { value: 'price', name: 'По цене' },
                ]}
            />
        </div>
    );
};

export default EventFilter;
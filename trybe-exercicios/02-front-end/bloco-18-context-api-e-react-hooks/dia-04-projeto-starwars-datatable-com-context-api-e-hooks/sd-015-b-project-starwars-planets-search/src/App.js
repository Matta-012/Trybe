import React from 'react';
import StartWarsProvider from './context/StarWarsProvider';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import NameFilterInput from './components/NameFilterInput';
import FilterInputs from './components/FilterInputs';
import SelectedFilters from './components/SelectedFilters';
import SortFilters from './components/SortFilters';

function App() {
  return (
    <StartWarsProvider>
      <Header />
      <section>
        <NameFilterInput />
      </section>
      <section>
        <FilterInputs />
        <SelectedFilters />
        <SortFilters />
      </section>
      <main>
        <Table />
      </main>
    </StartWarsProvider>
  );
}

export default App;

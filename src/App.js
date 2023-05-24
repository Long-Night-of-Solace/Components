import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project. You can use React on any project. You can use React on any project. You can use React on any project.'
        },
        {
            id: '2',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript on any project. You can use Javascript on any project. You can use Javascript on any project. You can use Javascript on any project.'
        },
        {
            id: '3',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project. You can use CSS on any project. You can use CSS on any project. You can use CSS on any project.'
        },
    ];
    return <Accordion items={items} />;
}

export default App;
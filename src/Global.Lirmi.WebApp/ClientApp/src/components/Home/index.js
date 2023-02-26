import React, { useState } from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import Button from '../Button';
import ExperienceCards from '../ExperienceCards';
import experienceData from '../../Data/experienceData';
import switchData from '../../Data/switchData';
import Main from '../Main';
import SwitchCards from '../SwitchCards'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Home = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [experienceCardsList, setExperienceCardsList] = useState(experienceData);

    const experienceCards = experienceCardsList.map((card, i) =>
        <div className="d-flex justify-content-between mt-3">
            <p className="card-index">{i + 1}</p>
            <Draggable
                draggableId={`draggable.${card.id}`}
                key={card.id}
                index={i}
            >
                {(provided) => (
                    <div
                        className="card_width"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <ExperienceCards 
                            title={card.title} 
                            text={card.text} 
                            time={card.time} 
                            showIcon={card.showIcon} 
                        />
                    </div>
                )}
            </Draggable> 
        </div>
    );

    
    const handleAction = (isChecked, id) => {
        if(id === 1){
            setIsChecked1(isChecked);
        }
        if(id === 2){
            setIsChecked2(isChecked);
        }
        if(id === 3){
            setIsChecked3(isChecked);
        }
    }
    
    const showBorder = (isChecked1 || isChecked2 || isChecked3);
    
    const switchCards = switchData.map((card, i) => 
    <div key={i}>
            <SwitchCards id={card.id} title={card.title} text={card.text} onAction={handleAction} />
        </div>
    );

    const dragEnd = (result) => {
        const cardItems = [...experienceCardsList];
        const [orderedItems] = cardItems.splice(result.source.index, 1);
        cardItems.splice(result.destination.index, 0, orderedItems);
        setExperienceCardsList(cardItems);
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-2 aside-bg pt-3 pb-3 aside-container">
                    <div className="position-between">
                        <h3 className="aside-title">Experiencias</h3>   
                        <Button icon={ <AddIcon /> } />
                    </div>
                    <div>
                        <DragDropContext onDragEnd={dragEnd}>
                            <Droppable 
                                droppableId="experienceSequence"
                                direction="vertical"
                                type="row"
                            >
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {experienceCards}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </div>
                <div className="col-md-7 p-4">
                    <Main showBorder={showBorder} showTracks={isChecked1} showSolver={isChecked2} showCustomMsg={isChecked3} />    
                </div>
                <div className="col-md-3 aside-bg pl-3">
                    {switchCards}
                </div>
            </div>
        </div>
    );
}

export default Home;
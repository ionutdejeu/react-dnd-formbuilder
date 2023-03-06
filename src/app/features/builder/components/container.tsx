'use client';

import { DndProvider, useDrop } from "react-dnd";
import { useFieldArray, useForm } from "react-hook-form";
import { HTML5Backend, NativeTypes } from 'react-dnd-html5-backend'
import { useCallback, useState } from "react";
import { cardDefintions } from "../definitions/cardsDefintions";
import { CardType } from "../definitions/cardType";
import { Card } from "./card";
interface CardState {
    name: string
    type: string
}

export const Container = () => {
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            cardsArray: [
                { accepts: [CardType.CARD1], lastDroppedItem: null },
                { accepts: [CardType.CARD2], lastDroppedItem: null },
                {
                    accepts: [CardType.CARD1, CardType.CARD2, NativeTypes.URL],
                    lastDroppedItem: null,
                },
                { accepts: [CardType.CARD1, NativeTypes.FILE], lastDroppedItem: null },
            ]
        }
    });
    const { fields, append, move, remove } = useFieldArray<any>({
        control,
        name: "cardsArray"
    });
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: "fields",
		drop: () => ({ name: "drop-fields" }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}));

    const [boxes] = useState<CardState[]>([
        { name: 'Card1', type: CardType.CARD1 },
        { name: 'Card3', type: CardType.CARD3 },
        { name: 'Card2', type: CardType.CARD2 },
    ])
    // const handleDrag = (result) => {
    //   console.log(result);
    // };
    const renderCard = useCallback((card:any, index:number) => {
		return <Card key={card?.id} index={index} id={card?.id} name={"d"} type={card.type} isDropped={false} />;
	}, []);
    
    const onSubmit = (data: any) => console.log("data", data);

    //uses move from useFieldArray to change the position of the form
    const handleDrag = ({ source, destination }: {
        source: any,
        destination: any
    }) => {
        if (destination) {
            move(source.index, destination.index);
        }
    };
    function isDropped(boxName: string) {
        return false
    }

    return (
        <div className="HomePage">
            
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    {fields.map((item, index) => {
                        return (<div key={index}>{index}</div>)
                    })}
                </div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    {boxes.map(({ name, type }, index) => (
                        <Card
                            key={index}
                            id={'dwa'}
                            index={index}
                            name={name}
                            type={type}
                            isDropped={isDropped(name)}
                        />
                    ))}
                </div>
           
        </div>
    );
};

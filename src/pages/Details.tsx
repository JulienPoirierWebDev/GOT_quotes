import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonLoading,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewDidEnter,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Character from '../types/Character';

const Details: React.FC = () => {
	const [character, setCharacter] = useState<Character | null>(null);
	const [loading, setLoading] = useState(true);

	const { slug } = useParams() as { slug: string };
	useIonViewDidEnter(() => {
		const getData = async () => {
			try {
				const request = await fetch(
					`https://api.gameofthronesquotes.xyz/v1/character/${slug}`
				);

				const data = await request.json();

				setTimeout(() => {
					setCharacter(data[0]);
					setLoading(false);
				}, 2000);
			} catch (error) {
				console.log(error, 'Oups, prb pdt la récup des characters');
			}
		};

		getData();
	});

	return (
		<IonPage>
			<IonHeader translucent={true}>
				<IonToolbar>
					<IonTitle slot='start'>GOT Quotes</IonTitle>
					<IonItem slot='end'>
						<IonBackButton />
					</IonItem>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				{loading && <p>Chargement =D</p>}
				{character && (
					<>
						<IonTitle>{character.name}</IonTitle>
						<IonLabel>
							{character.house?.name || 'No house attached'}
						</IonLabel>
						{character.quotes.map((quote) => {
							return (
								<IonItem
									style={{
										borderBottom: '5px solid red',
										marginBottom: '10px',
									}}
									key={quote}
								>
									{quote}
								</IonItem>
							);
						})}
					</>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Details;

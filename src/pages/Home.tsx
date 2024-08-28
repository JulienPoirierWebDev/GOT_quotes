import {
	IonButton,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonViewWillEnter,
} from '@ionic/react';
import './Home.css';
import { useState } from 'react';
import CharacterItem from '../components/CharacterItem';
import Character from '../types/Character';

const Home: React.FC = () => {
	const [characters, setCharacters] = useState([]);

	useIonViewWillEnter(() => {
		const getData = async () => {
			try {
				const request = await fetch(
					'https://api.gameofthronesquotes.xyz/v1/characters'
				);

				const data = await request.json();

				setCharacters(data);
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
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					{characters.length > 0 &&
						characters.map((character: Character) => {
							return (
								<CharacterItem
									key={character.slug}
									character={character}
								/>
							);
						})}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Home;

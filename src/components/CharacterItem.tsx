import { IonButton, IonItem, IonLabel } from '@ionic/react';
import Character from '../types/Character';
import blasons from '../assets/blason';

type CharacterItemProps = {
	character: Character;
};

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	const slugImage =
		character.house &&
		character.house.name //House Baratheon of Dragonstone
			.split(' ') //[ "House", "Baratheon","of", "Dragonstone"]
			.join('_') // "House_Baratheon_of_Dragon'stone"
			.split("'") // ["House_Baratheon_of_Dragon", "stone"]
			.join(''); // "House_Baratheon_of_Dragonstone"
	return (
		<IonItem key={character.slug}>
			<IonLabel>{character.name}</IonLabel>
			<IonItem slot='start'>
				<IonLabel slot='end'>
					{slugImage ? (
						<img
							src={blasons[slugImage]} // blasons.House_Baratheon_of_Dragonstone   || 		'https://www.lagardedenuit.com/wiki/images/a/a5/Blason-baratheon-2014-v01-256px.png',
							alt='bla'
						/>
					) : (
						<img src={blasons.No_house_attached} alt='end' />
					)}
				</IonLabel>
				<IonLabel slot='start'>
					{character.house?.name || 'No house attached'}
				</IonLabel>
			</IonItem>
			<IonButton slot='end' routerLink={`/details/${character.slug}`}>
				Voir le détail
			</IonButton>
		</IonItem>
	);
};

export default CharacterItem;

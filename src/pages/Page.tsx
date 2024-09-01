import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import React from 'react';

const Page: React.FC = () => {
// Partie logique de la page



    
    
    
    // Après la partie logique, on retourne le JSX : c'est la partie visuelle de la page
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Page Title</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>UI goes here...</IonContent>
		</IonPage>
	);
};

export default Page;

import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    new Menu (1, 'Tableau de bord', '/', null, 'dashboard', null, false, 0),

    new Menu (2, 'Clients & comptes', '/demande-compte', null, 'account_circle', null, true, 0), 
        new Menu (21, 'Demandes', '/demande-compte', null, 'remove', null, false, 2),
        new Menu (22, 'Etudes', '/etude-comptes', null, 'remove', null, false, 2),
        new Menu (23, 'Espace Client', '/client', null, 'remove', null, false, 2),
        new Menu (24, 'Clôture', '/cloture-compte', null, 'remove', null, false, 2),
        new Menu (25, 'Documents Client', '/document-client', null, 'remove', null, false, 2)
]

export const horizontalMenuItems = verticalMenuItems
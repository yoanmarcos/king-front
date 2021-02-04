import BinaryTree from 'family-binary-tree';

import algoMaster from '../images/algoMaster.jpg';
import Compte from '../images/Compte.jpg';
import leRoiDuFront from '../images/leRoiDuFront.jpg';
import kingOfZeFrance from '../images/kingOfZeFrance.jpg';
import pop1 from '../images/pop1.jpg';
import pop2 from '../images/pop2.jpg';
import pop3 from '../images/pop3.jpg';
import pop4 from '../images/pop4.jpg';
import pop5 from '../images/pop5.jpg';
import pop6 from '../images/pop6.jpg';
import pop7 from '../images/pop7.jpg';
import pop8 from '../images/pop8.jpg';
import pop9 from '../images/pop9.jpg';
import pop10 from '../images/pop10.jpg';
import pop11 from '../images/pop11.jpg';
import roiDuBack from '../images/roiDuBack.jpg';
import voleurDeRepo from '../images/voleurDeRepo.jpg';

const data = [
  {
    id: 1,
    left_child_id: 2,
    right_child_id: 3,
    username: 'KING BASILE',
    image: Compte,
  },
  {
    id: 2,
    left_child_id: 4,
    right_child_id: 5,
    username: 'LE ROI DE LA FRANCE',
    image: kingOfZeFrance,
  },
  {
    id: 3,
    left_child_id: 6,
    right_child_id: 7,
    username: 'MAÎTRE CODEWARS',
    image: algoMaster,
  },
  {
    id: 4,
    left_child_id: 8,
    right_child_id: 10,
    username: 'LE ROI DU BACK',
    image: roiDuBack,
  },
  {
    id: 5,
    left_child_id: 9,
    right_child_id: 11,
    username: 'LE ROI DU FRONT',
    image: leRoiDuFront,
  },
  {
    id: 6,
    left_child_id: 12,
    right_child_id: 13,
    username: 'DUC PLUDIDÉ',
    image: pop4,
  },
  {
    id: 7,
    left_child_id: 14,
    right_child_id: 15,
    username: 'COMPTE MATERIAL',
    image: pop2,
  },
  {
    id: 8,
    left_child_id: 16,
    right_child_id: 17,
    username: 'MARQUIS MANKDINSPI ',
    image: pop3,
  },
  {
    id: 9,
    left_child_id: null,
    right_child_id: null,
    username: 'DUCHESSE PLUDINSPI',
    image: pop5,
  },
  {
    id: 10,
    left_child_id: null,
    right_child_id: null,
    username: 'COMPTESSE JÉOUBLIÉ',
    image: pop6,
  },
  {
    id: 11,
    left_child_id: null,
    right_child_id: null,
    username: 'DAME PULLÉ',
    image: pop7,
  },
  {
    id: 12,
    left_child_id: null,
    right_child_id: null,
    username: 'JAY PADIDÉ',
    image: pop8,
  },
  {
    id: 13,
    left_child_id: null,
    right_child_id: null,
    username: 'JAY PERDUDUTEMPSAFAIRECA',
    image: pop9,
  },
  {
    id: 14,
    left_child_id: null,
    right_child_id: null,
    username: 'JSON STATHAM',
    image: pop10,
  },
  {
    id: 15,
    left_child_id: null,
    right_child_id: null,
    username: 'c MOI !!!',
    image: pop11,
  },
  {
    id: 16,
    left_child_id: null,
    right_child_id: null,
    username: '¯_(ツ)_/¯',
    image: pop1,
  },
  {
    id: 17,
    left_child_id: null,
    right_child_id: null,
    username: 'LE VOLEUR DE REPO',
    image: voleurDeRepo,
  },
];

const FamilyTree = () => {
  return (
    <div>
      <BinaryTree
        allUsers={data}
        rootUser={data[0]}
        bgSideBar="#333"
        colorText="#333"
        colorSideBar="#fff"
        imageFake="https://imgur.com/PE0P672.png"
        disableSideBar
        // disableNavigation
      />
    </div>
  );
};

export default FamilyTree;

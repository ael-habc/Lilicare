import { Button, Modal } from "antd";

export default function Modalx(props) {
  const { open, setOpen } = props;
  return (
    <div>
      <Modal
        title="Modal 1000px width"
        centered
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <h1>Politique de protection des données personnelles</h1>
        <hr />
        <h2>Collecte d'informations</h2>
        <p>
          Nous vous proposons sur ce site de nous fournir les renseignements
          (notamment votre nom et vos coordonnées) qui nous permettront de vous
          adresser la documentation que vous souhaitez.
          <br />
          Si vous souhaitez nous adresser un message électronique, votre adresse
          électronique sera automatiquement collectée, ce qui nous permettra de
          répondre à votre courrier.
        </p>
        <hr />
        <h2>Cookies</h2>
        <p>
          Un cookie ne permet pas de vous authentifier, en revanche, il
          enregistre des informations relatives à la navigation de votre
          ordinateur sur notre site que nous pourrons lire lors de vos visites
          ultérieures.
          <br />
          En règle générale, les cookies sont utilisés pour :
          <br />
          - garder une possibilité d'identification et d'accès aux informations
          relatives à la navigation des internautes, afin d'offrir un meilleur
          service, aussi personnalisé que possible ;
          <br />
          - évaluer la part d'audience du site.Chaque navigateur qui accède au
          site se voit attribuer un cookie unique permettant, ultérieurement, de
          déterminer la fréquence d'utilisation du site, les allées et venues
          d'un internaute par rapport à celles d'un autre utilisateur ;
          <br />- mesurer certains modèles de navigation, et identifier les
          zones de réseau du site visité, et plus généralement, votre attitude
          en matière de visite. Ces recherches servent d'appui pour l'analyse
          des similitudes ou des différences de comportement des utilisateurs du
          site et permettent d'anticiper vos attentes.
        </p>
      </Modal>
    </div>
  );
}

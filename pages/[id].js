import Layout from '../components/layout';
import { getTeamIds, getTeamData, getPlayerData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemTeam = await getTeamData(params.id);
  const itemPlayer = await getPlayerData(params.id);
  return {
    props: {
      itemTeam,
      itemPlayer
    }
  };
}

export async function getStaticPaths() {
  const paths = getTeamIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemTeam, itemPlayer }) {
  return (
    <Layout>

      <article className="card col-6">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title">{itemTeam.team_name}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2"><strong>Head Coach:</strong> {itemPlayer.head_coach}</h6>
          <p className="card-text"><strong>Quarterback:</strong> {itemPlayer.quarterback}</p>
          <a href={itemTeam.team_website} className="card-link" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
        <div className="card-footer bg-light">
          <p className="mb-0">Stay updated with the latest news and updates.</p>
        </div>

      </article>

    </Layout>

  );
}
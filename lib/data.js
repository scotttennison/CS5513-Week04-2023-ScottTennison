import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getTeamList() {
  const filePath = path.join(dataDir, 'teams.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  jsonObj.sort(function(a, b) {
    return a.odds_to_win - b.odds_to_win;
  });

  return jsonObj.map(
    function(item) {
      return {
        id: item.id.toString(),
        team_name: item.team_name
      };
    }
  );
}
export function getPlayerList() {
  const filePath = path.join(dataDir, 'player.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  jsonObj.sort(function(a, b) {
    return a.odds_to_win - b.odds_to_win;
  });

  return jsonObj.map(
    function(item) {
      return {
        id: item.id.toString(),
        team_name: item.team_name
      };
    }
  );
}

export function getTeamIds() {
  const filePath = path.join(dataDir, 'teams.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );

}
export function getPlayerIds() {
  const filePath = path.join(dataDir, 'player.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );

}

export async function getTeamData(idRequested) {
  const filePath = path.join(dataDir, 'teams.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}

export async function getPlayerData(idRequested) {
  const filePath = path.join(dataDir, 'player.json');

  const jsonString = fs.readFileSync(filePath, 'utf8');

  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}
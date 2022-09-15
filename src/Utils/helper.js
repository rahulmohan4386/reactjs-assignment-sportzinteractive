// Transform date form UTC to PDT.
export const transformDate = (dateString) => {
  if (dateString && dateString !== undefined && dateString !== "") {
    const dateInPDT = new Date(dateString).toLocaleString();
    return dateInPDT;
  }

  return "No date available";
};

// Search keyword helper function.
export const searchPlayers = (players, keyword) => {
  const searchTerm = keyword.toLowerCase();
  return players.filter((value) => {
    return (
      value.PFName.toLowerCase().match(new RegExp(searchTerm, "g")) ||
      value.TName.toLowerCase().match(new RegExp(searchTerm, "g"))
    );
  });
};

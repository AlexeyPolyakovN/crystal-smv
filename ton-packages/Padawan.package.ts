export default {"abi":{"ABI version":2,"header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"value0","type":"address"}],"outputs":[]},{"name":"vote","inputs":[{"name":"addrProposal","type":"address"},{"name":"choice","type":"bool"},{"name":"votes","type":"uint128"}],"outputs":[]},{"name":"confirmVote","inputs":[{"name":"votes","type":"uint128"}],"outputs":[]},{"name":"rejectVote","inputs":[{"name":"votes","type":"uint128"}],"outputs":[]},{"name":"deposit","inputs":[{"name":"votes","type":"uint128"}],"outputs":[]},{"name":"reclaim","inputs":[{"name":"votes","type":"uint128"},{"name":"returnTo","type":"address"}],"outputs":[]},{"name":"updateLockedVotes","inputs":[],"outputs":[]},{"name":"queryStatusCb","inputs":[{"name":"state","type":"uint8"}],"outputs":[]},{"name":"_addrRoot","inputs":[],"outputs":[{"name":"_addrRoot","type":"address"}]},{"name":"_addrOwner","inputs":[],"outputs":[{"name":"_addrOwner","type":"address"}]},{"name":"_proposals","inputs":[],"outputs":[{"name":"_proposals","type":"map(address,uint128)"}]},{"name":"_proposalsCount","inputs":[],"outputs":[{"name":"_proposalsCount","type":"uint128"}]},{"name":"_requestedVotes","inputs":[],"outputs":[{"name":"_requestedVotes","type":"uint128"}]},{"name":"_totalVotes","inputs":[],"outputs":[{"name":"_totalVotes","type":"uint128"}]},{"name":"_lockedVotes","inputs":[],"outputs":[{"name":"_lockedVotes","type":"uint128"}]}],"data":[{"key":1,"name":"_addrOwner","type":"address"}],"events":[]},"image":"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"}
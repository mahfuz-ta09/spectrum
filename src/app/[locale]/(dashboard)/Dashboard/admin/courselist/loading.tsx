

export default function Loading() {
    return (
        <div style={{ 
                    position:"fixed", height: "100vh", 
                    width: "100%", top: 0, left: 0, 
                    backgroundColor: "#000", zIndex: 9999 
                }}>
            <div style={{
                    position: "absolute", top: "50%", left: "50%"}}>
                <svg className="loading-spinner" viewBox="0 0 50 50" />
                    {/* <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle> */}
            </div>
        </div>
    )
}
import css from './emptyStory.module.css';


export const EmptyStory = () => {
       return (
              <div className={css.emptyStoryBlock}>
                     <h2 className={css.emptyStoryTitle}>You have a match with Michael</h2>
                     <p className={css.emptyStoryDescription}>Say something first</p>
              </div>
       );
};
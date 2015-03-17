<?php
/**
 * controller.php
 * @author SalesAgility (Andrew Mclaughlan) <support@salesagility.com>
 * Date: 06/03/15
 * Comments
 */
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

class CustomCasesController extends SugarController {

    function action_get_kb_articles(){

        $search = $_POST['search'];

        $query = "SELECT id, name, description, sum(relevance)
                  FROM (
                        SELECT id, name, description, 10 AS relevance
                        FROM aok_knowledgebase
                        WHERE name = '".$search."'
                        AND deleted = '0'
                        UNION SELECT id, name, description, 5 AS relevance
                        FROM aok_knowledgebase
                        WHERE name LIKE '%".$search."%'
                        AND deleted = '0'
                        UNION SELECT id, name, description, 2 AS relevance
                        FROM aok_knowledgebase
                        WHERE description LIKE '%".$search."%'
                        AND deleted = '0'
                        )results
                    GROUP BY id
                    ORDER BY sum( relevance ) DESC
        ";

        $offset = 0;
        $limit = 30;

        $result = $GLOBALS['db']->limitQuery($query, $offset, $limit);
        if($result->num_rows != 0){
            echo '<ol>';
            while($row = $GLOBALS['db']->fetchByAssoc($result) )
            {
                echo '<li style="font-size: 14px; margin-bottom: 6px;"><a class="kb_article" data-id="'.$row['id'].'" href="#">'.$row['name'].'<a/></li>';
            }
            echo '</ol>';
        }
        else {
            echo 'No suggestions';
        }
        die();
    }

    function action_get_kb_article(){
        echo 'works';
        die();
    }

}